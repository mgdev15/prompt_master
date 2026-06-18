import React, { useState, useEffect, useRef } from 'react';
import { i18n, templates } from './utils/i18n';
import StepCard from './components/StepCard';
import InputField from './components/InputField';
import TextAreaField from './components/TextAreaField';
import Chips from './components/Chips';
import ColorPicker from './components/ColorPicker';
import ResultCard from './components/ResultCard';
import ExplanatoryTable from './components/ExplanatoryTable';

// Default values for form data — all selection fields store KEYS
const DEFAULT_FORM_DATA = {
  brandName: '',
  businessType: '',
  customBusinessType: '',
  location: '',
  slogan: '',
  credentials: '',
  pages: ['home', 'about', 'services', 'contact'],
  services: '',
  hours: '',
  contact: '',
  colorPalette: 'orange',   // key
  visualStyle: 'modern',    // key
  heroDir: '',
  imagesDir: '',
  imageSource: 'unsplash',  // key
  features: ['whatsapp', 'contactForm', 'scrollReveal', 'hamburger', 'testimonials'], // keys
  frontend: 'html_css_js',  // key
  backend: 'none',          // key
  database: 'none',         // key
  deploy: 'none',           // key
  observations: ''
};

const getInitialFormData = () => {
  const saved = localStorage.getItem('prompt_master_form');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Error reading from localStorage", e);
    }
  }
  return { ...DEFAULT_FORM_DATA };
};

// SVG Icons
const IconWand = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"></path>
    <path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path>
  </svg>
);

const IconCopy = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
  </svg>
);

const IconCheck = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const IconTrash = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
);

const ToastSuccess = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const ToastError = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

export default function App() {
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem('prompt_master_lang');
    return savedLang === 'en' ? 'en' : 'pt';
  });

  const [formData, setFormData] = useState(getInitialFormData);
  const [accentTheme, setAccentTheme] = useState(() => {
    return localStorage.getItem('prompt_master_theme') || 'orange';
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [toasts, setToasts] = useState([]);
  const [shakeStep1, setShakeStep1] = useState(false);
  const [promptCopied, setPromptCopied] = useState(false);

  const resultRef = useRef(null);

  // Apply body theme class on mount and change
  useEffect(() => {
    localStorage.setItem('prompt_master_form', JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem('prompt_master_lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('prompt_master_theme', accentTheme);
    document.body.className = `theme-${accentTheme}`;
  }, [accentTheme]);

  // Apply initial body class on mount
  useEffect(() => {
    document.body.className = `theme-${accentTheme}`;
  }, []);

  const showToast = (type, message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationErrors[name]) {
      setValidationErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSelectionChange = (field, value) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      if (field === 'backend' && value === 'none') {
        updated.database = 'none';
      }
      return updated;
    });
    // Map color key to UI accent theme
    if (field === 'colorPalette') {
      setAccentTheme(value);
    }
  };

  const toggleLanguage = () => {
    const nextLang = lang === 'pt' ? 'en' : 'pt';
    setLang(nextLang);
    // formData stores language-agnostic keys — no remapping needed
    showToast('success', nextLang === 'en' ? 'Switched to English' : 'Idioma alterado para Português');
  };

  const toggleAccentTheme = () => {
    const keys = ['orange', 'blue', 'green', 'pink', 'purple', 'red', 'teal', 'indigo', 'yellow', 'gold', 'darkgray', 'lightgray'];
    setAccentTheme((prev) => {
      const idx = keys.indexOf(prev);
      const nextTheme = keys[idx === -1 ? 0 : (idx + 1) % keys.length];
      // Also update the form data colorPalette!
      setFormData((prevForm) => ({ ...prevForm, colorPalette: nextTheme }));
      return nextTheme;
    });
  };

  const handleClearForm = (e) => {
    if (e) e.preventDefault();
    setFormData({ ...DEFAULT_FORM_DATA });
    setValidationErrors({});
    setShowResult(false);
    setGeneratedPrompt('');
    showToast('success', lang === 'en' ? 'Form cleared' : 'Formulário limpo');
  };

  // Resolve keys to current-language display labels for prompt generation
  const resolveFormData = () => {
    const t = i18n[lang];
    return {
      brandName: formData.brandName,
      // businessType stores key; resolve to display label
      businessType: formData.businessType === 'other'
        ? formData.customBusinessType
        : (t.businessTypes[formData.businessType] || formData.businessType),
      location: formData.location,
      slogan: formData.slogan,
      credentials: formData.credentials,
      pages: formData.pages.map(key => t.pagesList[key] || key),
      services: formData.services,
      hours: formData.hours,
      contact: formData.contact,
      colorPalette: t.colors[formData.colorPalette] || formData.colorPalette,
      visualStyle: t.stylesList[formData.visualStyle] || formData.visualStyle,
      heroDir: formData.heroDir,
      imagesDir: formData.imagesDir,
      imageSource: t.imageSources[formData.imageSource] || formData.imageSource,
      features: formData.features.map(key => t.featuresList[key] || key),
      frontend: t.frontendOptions[formData.frontend] || formData.frontend,
      backend: t.backendOptions[formData.backend] || formData.backend,
      database: t.databaseOptions[formData.database] || formData.database,
      deploy: t.deployOptions[formData.deploy] || formData.deploy,
      observations: formData.observations
    };
  };

  const handleGeneratePrompt = (e) => {
    e.preventDefault();

    const t = i18n[lang];
    const errors = {};
    if (!formData.brandName.trim()) errors.brandName = true;
    if (!formData.businessType) errors.businessType = true;
    // 'other' is the stable key for the custom-type option
    if (formData.businessType === 'other' && !formData.customBusinessType.trim()) {
      errors.customBusinessType = true;
    }
    if (!formData.location.trim()) errors.location = true;

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setShakeStep1(true);
      setTimeout(() => setShakeStep1(false), 500);
      showToast('error', t.errorRequired);
      return;
    }

    const promptText = templates[lang](resolveFormData());
    setGeneratedPrompt(promptText);
    setShowResult(true);

    setTimeout(() => {
      if (resultRef.current) {
        resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  const handleCopyPrompt = () => {
    if (!generatedPrompt) return;
    navigator.clipboard.writeText(generatedPrompt).then(() => {
      setPromptCopied(true);
      showToast('success', i18n[lang].copiedFeedback);
      setTimeout(() => setPromptCopied(false), 2000);
    });
  };

  // Regenerate prompt when language changes if result is shown
  useEffect(() => {
    if (showResult && formData.brandName) {
      const promptText = templates[lang](resolveFormData());
      setGeneratedPrompt(promptText);
    }
  }, [lang]);

  const t = i18n[lang];

  // Progress calculation (simple heuristic)
  const filledSteps = [
    formData.brandName && formData.businessType && formData.location,
    formData.pages.length > 0,
    formData.colorPalette,
    true,
    formData.features.length > 0,
    true,
    formData.frontend
  ].filter(Boolean).length;
  const progress = Math.round((filledSteps / 7) * 100);

  return (
    <div className="container">
      {/* Toast Notifications */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast ${toast.type}`}>
            {toast.type === 'success' ? <ToastSuccess /> : <ToastError />}
            <span>{toast.message}</span>
          </div>
        ))}
      </div>

      {/* ── Header ── */}
      <header>
        <a href="#" className="logo" onClick={handleClearForm}>
          <img src="/prompt_logo_500x500.png" alt="Logo" className="logo-img" />
          <span className="logo-text">{t.title}</span>
        </a>

        <div className="controls-right">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleAccentTheme}
            title={lang === 'en' ? 'Toggle accent color' : 'Alternar cor de destaque'}
          >
            <div className="theme-toggle-dot" />
          </button>
          <button type="button" className="lang-btn" onClick={toggleLanguage}>
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>
      </header>

      {/* ── Hero intro ── */}
      <div className="hero-section">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          {lang === 'en' ? 'AI-Powered Prompt Generator' : 'Gerador de Prompts com IA'}
        </div>
        <h1 className="hero-title">
          {lang === 'en'
            ? <>Build <span>professional websites</span><br />with a single prompt</>
            : <>Crie <span>sites profissionais</span><br />com um único prompt</>}
        </h1>
        <p className="hero-subtitle">{t.subtitle}</p>

        {/* Progress bar */}
        <div className="progress-bar-wrap">
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <span className="progress-label">{progress}% {lang === 'en' ? 'complete' : 'preenchido'}</span>
        </div>
      </div>

      {/* ── Form ── */}
      <form onSubmit={handleGeneratePrompt} noValidate>

        {/* SEÇÃO 1 */}
        <div className={shakeStep1 ? 'shake' : ''}>
          <StepCard stepNumber={1} title={t.step1Title} description={t.step1Desc}>
            <InputField
              label={t.brandNameLabel} name="brandName"
              value={formData.brandName} onChange={handleInputChange}
              placeholder={t.brandNamePlaceholder}
              required isInvalid={validationErrors.brandName}
            />
            <InputField
              label={t.businessTypeLabel} name="businessType"
              value={formData.businessType} onChange={handleInputChange}
              required isInvalid={validationErrors.businessType}
              options={t.businessTypes} selectPlaceholder={t.businessTypeSelect}
            />
            <div className={`dynamic-field ${formData.businessType === 'other' ? 'visible' : ''}`}>
              <InputField
                label={t.customTypeLabel} name="customBusinessType"
                value={formData.customBusinessType} onChange={handleInputChange}
                placeholder={t.customTypePlaceholder}
                required={formData.businessType === 'other'}
                isInvalid={validationErrors.customBusinessType}
              />
            </div>
            <InputField
              label={t.locationLabel} name="location"
              value={formData.location} onChange={handleInputChange}
              placeholder={t.locationPlaceholder}
              required isInvalid={validationErrors.location}
            />
            <InputField
              label={t.sloganLabel} name="slogan"
              value={formData.slogan} onChange={handleInputChange}
              placeholder={t.sloganPlaceholder}
            />
            <TextAreaField
              label={t.credentialsLabel} name="credentials"
              value={formData.credentials} onChange={handleInputChange}
              placeholder={t.credentialsPlaceholder}
              helperText={t.credentialsHelper} rows={3}
            />
          </StepCard>
        </div>

        {/* SEÇÃO 2 */}
        <StepCard stepNumber={2} title={t.step2Title} description={t.step2Desc}>
          <Chips
            label={t.pagesLabel} options={t.pagesList}
            selected={formData.pages}
            onChange={(val) => handleSelectionChange('pages', val)} isMulti
          />
          <TextAreaField
            label={t.servicesLabel} name="services"
            value={formData.services} onChange={handleInputChange}
            placeholder={t.servicesPlaceholder} rows={3}
          />
          <TextAreaField
            label={t.hoursLabel} name="hours"
            value={formData.hours} onChange={handleInputChange}
            placeholder={t.hoursPlaceholder} rows={2}
          />
          <TextAreaField
            label={t.contactLabel} name="contact"
            value={formData.contact} onChange={handleInputChange}
            placeholder={t.contactPlaceholder} rows={2}
          />
        </StepCard>

        {/* SEÇÃO 3 */}
        <StepCard stepNumber={3} title={t.step3Title} description={t.step3Desc}>
          <ColorPicker
            label={t.paletteLabel} options={t.colors}
            selected={formData.colorPalette}
            onChange={(val) => handleSelectionChange('colorPalette', val)}
          />
          <Chips
            label={t.styleLabel} options={t.stylesList}
            selected={formData.visualStyle}
            onChange={(val) => handleSelectionChange('visualStyle', val)}
          />
        </StepCard>

        {/* SEÇÃO 4 */}
        <StepCard stepNumber={4} title={t.step4Title} description={t.step4Desc}>
          <InputField
            label={t.heroDirLabel} name="heroDir"
            value={formData.heroDir} onChange={handleInputChange}
            placeholder={t.heroDirPlaceholder}
          />
          <InputField
            label={t.imagesDirLabel} name="imagesDir"
            value={formData.imagesDir} onChange={handleInputChange}
            placeholder={t.imagesDirPlaceholder}
          />
          <Chips
            label={t.imageSourceLabel} options={t.imageSources}
            selected={formData.imageSource}
            onChange={(val) => handleSelectionChange('imageSource', val)}
          />
        </StepCard>

        {/* SEÇÃO 5 */}
        <StepCard stepNumber={5} title={t.step5Title} description={t.step5Desc}>
          <Chips
            label={t.featuresLabel} options={t.featuresList}
            selected={formData.features}
            onChange={(val) => handleSelectionChange('features', val)} isMulti
          />
        </StepCard>

        {/* SEÇÃO 6 */}
        <StepCard stepNumber={6} title={t.step6Title} description={t.step6Desc}>
          <TextAreaField
            label={t.observationsLabel} name="observations"
            value={formData.observations} onChange={handleInputChange}
            placeholder={t.observationsPlaceholder} rows={4}
          />
        </StepCard>

        {/* SEÇÃO 7 */}
        <StepCard stepNumber={7} title={t.step7Title} description={t.step7Desc}>
          <Chips
            label={t.frontendLabel} options={t.frontendOptions}
            selected={formData.frontend}
            onChange={(val) => handleSelectionChange('frontend', val)}
          />
          <Chips
            label={t.backendLabel} options={t.backendOptions}
            selected={formData.backend}
            onChange={(val) => handleSelectionChange('backend', val)}
          />
          <div className={`dynamic-field ${formData.backend !== 'none' ? 'visible' : ''}`}>
            <Chips
              label={t.databaseLabel} options={t.databaseOptions}
              selected={formData.database}
              onChange={(val) => handleSelectionChange('database', val)}
            />
          </div>
          <Chips
            label={t.deployLabel} options={t.deployOptions}
            selected={formData.deploy}
            onChange={(val) => handleSelectionChange('deploy', val)}
          />
        </StepCard>

        {/* ── Action Buttons ── */}
        <div className="actions-bar">
          <button type="submit" className="btn btn-primary">
            <IconWand /> {t.generateBtn}
          </button>
          <button
            type="button"
            className={`btn btn-secondary ${!showResult ? 'btn-disabled' : ''}`}
            onClick={handleCopyPrompt}
            disabled={!showResult}
          >
            {promptCopied ? <><IconCheck /> {t.copiedFeedback}</> : <><IconCopy /> {t.copyBtn}</>}
          </button>
        </div>

        <div className="actions-footer">
          <button type="button" className="btn-clear" onClick={handleClearForm}>
            <IconTrash /> {t.clearBtn}
          </button>
        </div>
      </form>

      {/* ── Result Card ── */}
      <ResultCard
        title={t.resultTitle}
        promptText={generatedPrompt}
        copyLabel={t.copyBtn}
        copiedLabel={t.copiedFeedback}
        isVisible={showResult}
        resultRef={resultRef}
        onCopySuccess={() => showToast('success', t.copiedFeedback)}
      />

      {/* ── How to Use Table ── */}
      <ExplanatoryTable
        title={t.howToUseTitle}
        subtitleText={t.howToUseText}
        headerVar={t.tableHeaderVar}
        headerDesc={t.tableHeaderDesc}
        variables={t.variables}
      />

      {/* ── Footer ── */}
      <footer className="app-footer">
        <p>
          🧠 <strong>Prompt Master</strong> &mdash;{' '}
          {lang === 'en'
            ? 'Generate professional AI prompts for any website.'
            : 'Gere prompts profissionais de IA para qualquer site.'}
        </p>
      </footer>
    </div>
  );
}