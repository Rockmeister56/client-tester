// Botemia Bridge for Mortgage Assist Demo
// Generated: 3/21/2026, 4:26:28 AM
// Client ID: mortgage-assist-demo
// Version: 5.4 - BATON PASS FIX

(function() {
    "use strict";

    // ===== EMBEDDED CLIENT CONFIGURATION =====
    window.BotemiaConfig = {
    "id": "mortgage-assist-demo",
    "name": "Mortgage Assist Demo",
    "websiteUrl": "",
    "agentId": "",
    "widgetId": "",
    "apiKey": "",
    "environment": "production",
    "industry": "mortgage",
    "modules": {
        "emailConfig": {
            "loanOfficerEmail": "mobilewise.ai@gmail.com",
            "ccEmail": "",
            "emailSubject": "New Pre-Qual Lead: {{firstName}} {{lastName}}"
        },
        "splashScreen": {
            "enabled": true,
            "agentId": "",
            "title": "Meet Tess",
            "subtitle": "Your Personal AI Web Guide",
            "tessVideoUrl": "",
            "tessVideoFit": "cover",
            "tickerKeywords": "",
            "gradientCenter": "#1e4a8a",
            "gradientOuter": "#0a1a2f",
            "primaryButton": {
                "text": "Get AI help with Tess",
                "gradientTop": "#f8c400",
                "gradientBottom": "#d4a000",
                "hoverTop": "#ffd700",
                "hoverBottom": "#e0b000",
                "textColor": "#0a0f1e"
            },
            "secondaryButton": {
                "text": "Just Browsing",
                "gradientTop": "#3a4050",
                "gradientBottom": "#2a2f3f",
                "hoverTop": "#4a5060",
                "hoverBottom": "#3a4050",
                "textColor": "#ffffff"
            },
            "persistentButton": {
                "enabled": true,
                "position": "bottom-left",
                "action": "activate-tess",
                "gradientTop": "#f8c400",
                "gradientBottom": "#d4a000"
            },
            "branding": {
                "name": "",
                "logo": ""
            }
        },
        "testimonial": {
            "groups": []
        },
        "videoVault": {
            "videos": []
        },
        "smartScreen": {
            "action": "showBestMatch",
            "images": []
        },
        "websiteInfo": {
            "triggers": [],
            "infoType": "navigation",
            "action": "showSmartNavigation"
        },
        "preQualification": {
            "enabled": true,
            "knowledgeBaseScript": "mortgage",
            "triggerPhrase": "I want to get pre-qualified",
            "emailSubject": "New Pre-Qual Lead: {{firstName}} {{lastName}}",
            "emailTemplate": "New Lead\n----------------\nName: {{name}}\nEmail: {{email}}\nPhone: {{phone}}\nLoan Purpose: {{loan_purpose}}\nProperty Value: {{property_value}}\nDown Payment: {{down_payment}}\nCredit Score: {{credit_score}}\nIncome: {{annual_income}}\n\nFull Transcript:\n{{transcript}}"
        }
    },
    "updatedAt": "2026-03-21T11:26:27.844Z"
};

    // ===== EMBEDDED PRE-QUAL SCRIPT =====
    const PRE_QUAL_SCRIPT = {
    "name": "mortgage-pre-qualification",
    "industry": "mortgage",
    "steps": [
        {
            "sequence": 1,
            "speaker": "tess",
            "text": "Tess: You've definitely come to the right place. ✅",
            "options": null
        },
        {
            "sequence": 2,
            "speaker": "user",
            "text": "User: [Provides name]",
            "options": null
        },
        {
            "sequence": 3,
            "speaker": "tess",
            "text": "Tess: Great! Let's get you pre-qualified. First, what's your full name?",
            "field": "firstName",
            "type": "text",
            "options": null
        },
        {
            "sequence": 4,
            "speaker": "user",
            "text": "User: [Responds with name]",
            "options": null
        },
        {
            "sequence": 5,
            "speaker": "tess",
            "text": "Tess: And what's your last name?",
            "field": "lastName",
            "type": "text",
            "options": null
        },
        {
            "sequence": 6,
            "speaker": "user",
            "text": "User: [Responds with last name]",
            "options": null
        },
        {
            "sequence": 7,
            "speaker": "tess",
            "text": "Tess: What's the best email address to send your pre-qualification letter to? I'll make sure our loan team copies you on everything.",
            "field": "email",
            "type": "email",
            "options": null
        },
        {
            "sequence": 8,
            "speaker": "user",
            "text": "User: [Responds with email]",
            "options": null
        },
        {
            "sequence": 9,
            "speaker": "tess",
            "text": "Tess: And your phone number? In case our loan team needs to reach you quickly with your approval options.",
            "field": "phone",
            "type": "phone",
            "options": null
        },
        {
            "sequence": 10,
            "speaker": "user",
            "text": "User: [Responds with phone]",
            "options": null
        },
        {
            "sequence": 11,
            "speaker": "tess",
            "text": "Tess: Got it. You're doing great—we're about a quarter of the way through.",
            "options": null
        },
        {
            "sequence": 12,
            "speaker": "tess",
            "text": "Tess: Are you employed, self-employed, retired, or other?",
            "field": "employmentStatus",
            "type": "choice",
            "options": [
                "Employed",
                "Self-Employed",
                "Retired",
                "Other"
            ]
        },
        {
            "sequence": 13,
            "speaker": "user",
            "text": "User: [Selects status]",
            "options": null
        },
        {
            "sequence": 14,
            "speaker": "tess",
            "text": "Tess: Got it. Self-employed is very common—we have specialized programs for business owners. Do you typically document your income with tax returns or bank statements?",
            "field": "selfEmployedDocumentation",
            "type": "choice",
            "options": [
                "Tax Returns",
                "Bank Statements",
                "Both"
            ]
        },
        {
            "sequence": 15,
            "speaker": "user",
            "text": "User: [Responds]",
            "options": null
        },
        {
            "sequence": 16,
            "speaker": "tess",
            "text": "Tess: And are you W-2 or 1099?",
            "field": "employedDocumentation",
            "type": "choice",
            "options": [
                "W-2",
                "1099"
            ]
        },
        {
            "sequence": 17,
            "speaker": "user",
            "text": "User: [Responds]",
            "options": null
        },
        {
            "sequence": 18,
            "speaker": "tess",
            "text": "Tess: Approximately what's your annual household income? Just a ballpark is fine—this helps me match you with the right loan programs.",
            "field": "annualIncome",
            "type": "currency",
            "options": null
        },
        {
            "sequence": 19,
            "speaker": "user",
            "text": "User: [Provides amount]",
            "options": null
        },
        {
            "sequence": 20,
            "speaker": "tess",
            "text": "Tess: Thank you. That gives me a clear picture.",
            "options": null
        },
        {
            "sequence": 21,
            "speaker": "tess",
            "text": "Tess: And do you typically document your income with W-2s, tax returns, or bank statements?",
            "field": "incomeDocumentation",
            "type": "choice",
            "options": [
                "W-2s",
                "Tax Returns",
                "Bank Statements"
            ]
        },
        {
            "sequence": 22,
            "speaker": "user",
            "text": "User: [Selects option]",
            "options": null
        },
        {
            "sequence": 23,
            "speaker": "tess",
            "text": "Tess: Now let's talk about credit—and I promise I'm not here to judge. How would you describe your credit?",
            "field": "creditScore",
            "type": "choice",
            "options": [
                "Excellent (740+)",
                "Good (700-739)",
                "Fair (620-699)",
                "Challenged (below 620)",
                "Not sure"
            ]
        },
        {
            "sequence": 24,
            "speaker": "user",
            "text": "User: [Selects range]",
            "options": null
        },
        {
            "sequence": 25,
            "speaker": "tess",
            "text": "Tess: How much are you planning to put down? Just a range is fine.",
            "field": "downPayment",
            "type": "choice",
            "options": [
                "Less than 3%",
                "3-5%",
                "5-10%",
                "10-20%",
                "20%+"
            ]
        },
        {
            "sequence": 26,
            "speaker": "user",
            "text": "User: [Selects range]",
            "options": null
        },
        {
            "sequence": 27,
            "speaker": "tess",
            "text": "Tess: Got it. And just so you know—that range is totally workable. We have programs specifically for that.",
            "options": null
        },
        {
            "sequence": 28,
            "speaker": "tess",
            "text": "Tess: Where will your down payment come from? Savings, gift from family, sale of a current home, or something else?",
            "field": "downPaymentSource",
            "type": "choice",
            "options": [
                "Savings",
                "Gift from family",
                "Sale of current home",
                "Investment/401k",
                "Other"
            ]
        },
        {
            "sequence": 29,
            "speaker": "user",
            "text": "User: [Selects source]",
            "options": null
        },
        {
            "sequence": 30,
            "speaker": "tess",
            "text": "Tess: Have you had any bankruptcies or foreclosures in the last 7 years?",
            "field": "bankruptcyHistory",
            "type": "choice",
            "options": [
                "Yes",
                "No",
                "Prefer not to say"
            ]
        },
        {
            "sequence": 31,
            "speaker": "user",
            "text": "User: [Selects option]",
            "options": null
        },
        {
            "sequence": 32,
            "speaker": "tess",
            "text": "Tess: Are you looking to purchase a home or refinance an existing one?",
            "field": "loanPurpose",
            "type": "choice",
            "options": [
                "Purchase a home",
                "Refinance current home",
                "Cash-out refinance"
            ]
        },
        {
            "sequence": 33,
            "speaker": "user",
            "text": "User: [Selects option]",
            "options": null
        },
        {
            "sequence": 34,
            "speaker": "tess",
            "text": "Tess: What type of property are you buying or refinancing?",
            "field": "propertyType",
            "type": "choice",
            "options": [
                "Single family home",
                "Condominium",
                "Townhouse",
                "Multi-family (2-4 units)",
                "Manufactured home"
            ]
        },
        {
            "sequence": 35,
            "speaker": "user",
            "text": "User: [Selects type]",
            "options": null
        },
        {
            "sequence": 36,
            "speaker": "tess",
            "text": "Tess: Are you a first-time homebuyer?",
            "field": "firstTimeBuyer",
            "type": "choice",
            "options": [
                "Yes",
                "No"
            ]
        },
        {
            "sequence": 37,
            "speaker": "user",
            "text": "User: [Selects yes/no]",
            "options": null
        },
        {
            "sequence": 38,
            "speaker": "tess",
            "text": "Tess: Have you or your spouse served in the military?",
            "field": "militaryService",
            "type": "choice",
            "options": [
                "Yes - Active duty",
                "Yes - Veteran",
                "No"
            ]
        },
        {
            "sequence": 39,
            "speaker": "user",
            "text": "User: [Selects option]",
            "options": null
        },
        {
            "sequence": 40,
            "speaker": "tess",
            "text": "Tess: Last question—what's your timeline for purchasing or refinancing?",
            "field": "timeline",
            "type": "choice",
            "options": [
                "Already have an offer",
                "Looking now - next 30 days",
                "1-3 months",
                "3-6 months",
                "Just exploring"
            ]
        },
        {
            "sequence": 41,
            "speaker": "user",
            "text": "User: [Selects timeline]",
            "options": null
        },
        {
            "sequence": 42,
            "speaker": "tess",
            "text": "Tess: That's it! You're all done. ✅",
            "options": null
        }
    ],
    "extracted_fields": [
        "firstName",
        "lastName",
        "email",
        "phone",
        "employmentStatus",
        "selfEmployedDocumentation",
        "employedDocumentation",
        "annualIncome",
        "incomeDocumentation",
        "creditScore",
        "downPayment",
        "downPaymentSource",
        "bankruptcyHistory",
        "loanPurpose",
        "propertyType",
        "firstTimeBuyer",
        "militaryService",
        "timeline"
    ],
    "upload_date": "2026-03-21T11:26:17.696Z"
};
    console.log('✅ PRE_QUAL_SCRIPT embedded with', PRE_QUAL_SCRIPT.steps?.length, 'steps');

    const style = document.createElement('style');
    style.textContent = `
        .splash-avatar-container {
            width: 220px; height: 384px; margin: 0 auto 25px;
            border-radius: 20px; overflow: hidden;
            background: #000;
            box-shadow: 0 20px 30px rgba(0,0,0,0.5);
            border: 2px solid rgba(255,255,255,0.1);
            display: flex; align-items: center; justify-content: center;
            position: relative;
        }
        .splash-avatar-container lemon-slice-widget {
            position: absolute;
            top: 50%;
            left: 45%;
            transform: translate(-50%, -50%);
            width: 280px !important;
            height: 400px !important;
            max-width: none !important;
            max-height: none !important;
            border-radius: 18px;
        }
        .splash-card {
            background: radial-gradient(circle at center, #1e4a8a 0%, #0a1a2f 80%);
            border-radius: 48px; padding: 20px 30px 40px 30px;
            max-width: 475px; width: 90%; text-align: center;
            box-shadow: 0 30px 60px rgba(0,0,0,0.6);
            animation: slideUp 0.4s ease;
        }
        .splash-card h1 { color: white; font-size: 2.5rem; margin-bottom: 5px; font-weight: 700; }
        .splash-card h2 { color: rgba(255,255,255,0.9); font-size: 1.2rem; margin-bottom: 20px; font-weight: 300; }
        .button-group { display: flex; gap: 10px; justify-content: center; margin-top: 15px; }
        .primary-btn, .secondary-btn { padding: 12px 20px; border-radius: 40px; font-size: 1rem; font-weight: 600; cursor: pointer; flex: 1; max-width: 200px; border: none; transition: all 0.2s; }
        .primary-btn:hover, .secondary-btn:hover { transform: scale(1.02); }
        .ticker-container {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(90deg, rgba(0,0,0,0.9), rgba(248,196,0,0.2), rgba(0,0,0,0.9));
            backdrop-filter: blur(2px);
            color: #f8c400;
            padding: 6px 0;
            overflow: hidden;
            white-space: nowrap;
            font-size: 13px;
            font-weight: 600;
            text-shadow: 0 1px 2px rgba(0,0,0,0.8);
            z-index: 10;
            pointer-events: none;
            border-top: 2px solid #f8c400;
            border-bottom: none;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.5);
        }
        .ticker-content {
            display: inline-block;
            animation: ticker 25s linear infinite;
            padding-left: 100%;
        }
        @keyframes ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
        }
        .ticker-item {
            display: inline-block;
            padding: 0 25px;
            color: white;
            font-size: 13px;
            font-weight: 500;
            letter-spacing: 0.5px;
        }
        .ticker-item i {
            margin-right: 8px;
            color: #f8c400;
            font-size: 12px;
            filter: drop-shadow(0 0 3px rgba(248,196,0,0.5));
        }
    `;
    document.head.appendChild(style);

    function createSplashWidget() {
        const widget = document.createElement('lemon-slice-widget');
        widget.setAttribute('agent-id', '');
        widget.setAttribute('inline', '');
        widget.setAttribute('custom-minimized-width', '280');
        widget.setAttribute('custom-minimized-height', '400');
        widget.setAttribute('initial-state', 'active');
        widget.setAttribute('hide-ui', '');
        widget.id = 'splash-widget';
        return widget;
    }

    function createMainWidget() {
        const widget = document.createElement('lemon-slice-widget');
        widget.setAttribute('agent-id', '');
        widget.setAttribute('initial-state', 'minimized');
        widget.setAttribute('custom-minimized-width', '144');
        widget.setAttribute('custom-minimized-height', '216');
        widget.id = 'main-widget';
        widget.style.display = 'none';
        return widget;
    }

    function showSplash() {
        const config = window.BotemiaConfig.modules?.splashScreen;
        if (!config || !config.enabled) return;

        const overlay = document.createElement('div');
        overlay.className = 'splash-overlay';
        overlay.id = 'splashOverlay';
        overlay.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.7); backdrop-filter: blur(4px);
            display: flex; align-items: center; justify-content: center; z-index: 99999;
        `;

        const card = document.createElement('div');
        card.className = 'splash-card';
        card.style.background = `radial-gradient(circle at center, ${config.gradientCenter || '#1e4a8a'} 0%, ${config.gradientOuter || '#0a1a2f'} 80%)`;

        let cardHTML = `
            <h1>✨ ${config.title || 'Meet Tess!'} ✨</h1>
            <h2>${config.subtitle || 'Your Personal AI Web Guide'}</h2>
            <div class="splash-avatar-container" id="splashAvatarContainer"></div>
            <div class="button-group">
                <button class="primary-btn" id="activateTessBtn" style="background: linear-gradient(145deg, ${config.primaryButton?.gradientTop || '#f8c400'}, ${config.primaryButton?.gradientBottom || '#d4a000'}); color: ${config.primaryButton?.textColor || '#0a0f1e'};">${config.primaryButton?.text || 'Get AI help with Tess'}</button>
                <button class="secondary-btn" id="justBrowsingBtn" style="background: linear-gradient(145deg, ${config.secondaryButton?.gradientTop || '#3a4050'}, ${config.secondaryButton?.gradientBottom || '#2a2f3f'}); color: ${config.secondaryButton?.textColor || '#ffffff'};">${config.secondaryButton?.text || 'Just Browsing'}</button>
            </div>
        `;

        // Add white footer area with logo - EXACT DIMENSIONS
        cardHTML += `
            <div style="position: relative; width: 475px; left: 50%; transform: translateX(-50%); margin-top: 25px; background: white; border-radius: 0 0 48px 48px; padding: 15px 0; margin-bottom: -40px;">
                <div style="display: flex; align-items: center; justify-content: center; gap: 15px; width: 415px; margin: 0 auto;">
                    ${config.branding?.logo ? '<img src="' + config.branding.logo + '" style="height: 36px; width: auto;">' : ''}
                    ${config.branding?.name ? '<span style="color: #333; font-size: 18px; font-weight: 500;">' + config.branding.name + '</span>' : ''}
                </div>
            </div>
        `;
        card.innerHTML = cardHTML;

        overlay.appendChild(card);
        document.body.appendChild(overlay);

        const container = document.getElementById('splashAvatarContainer');
        const splashWidget = createSplashWidget();
        container.appendChild(splashWidget);

        // Add ticker tape if keywords exist
        const tickerKeywords = config.tickerKeywords;
        if (tickerKeywords) {
            const keywords = tickerKeywords.split(',').map(k => k.trim()).filter(k => k);
            
            if (keywords.length > 0) {
                const tickerContainer = document.createElement('div');
                tickerContainer.className = 'ticker-container';
                
                const tickerContent = document.createElement('div');
                tickerContent.className = 'ticker-content';
                
                // Duplicate keywords for seamless looping
                const allKeywords = [...keywords, ...keywords];
                
                allKeywords.forEach(keyword => {
                    const span = document.createElement('span');
                    span.className = 'ticker-item';
                    span.innerHTML = `<i class="fas fa-star"></i> ${keyword}`;
                    tickerContent.appendChild(span);
                });
                
                tickerContainer.appendChild(tickerContent);
                container.appendChild(tickerContainer);
            }
        }
        document.getElementById('activateTessBtn').addEventListener('click', activateTess);
        document.getElementById('justBrowsingBtn').addEventListener('click', justBrowsing);

        const primaryBtn = document.getElementById('activateTessBtn');
        primaryBtn.onmouseover = () => { primaryBtn.style.background = `linear-gradient(145deg, ${config.primaryButton?.hoverTop || '#ffd700'}, ${config.primaryButton?.hoverBottom || '#e0b000'})`; primaryBtn.style.transform = 'scale(1.02)'; };
        primaryBtn.onmouseout = () => { primaryBtn.style.background = `linear-gradient(145deg, ${config.primaryButton?.gradientTop || '#f8c400'}, ${config.primaryButton?.gradientBottom || '#d4a000'})`; primaryBtn.style.transform = 'scale(1)'; };
        const secondaryBtn = document.getElementById('justBrowsingBtn');
        secondaryBtn.onmouseover = () => { secondaryBtn.style.background = `linear-gradient(145deg, ${config.secondaryButton?.hoverTop || '#4a5060'}, ${config.secondaryButton?.hoverBottom || '#3a4050'})`; secondaryBtn.style.transform = 'scale(1.02)'; };
        secondaryBtn.onmouseout = () => { secondaryBtn.style.background = `linear-gradient(145deg, ${config.secondaryButton?.gradientTop || '#3a4050'}, ${config.secondaryButton?.gradientBottom || '#2a2f3f'})`; secondaryBtn.style.transform = 'scale(1)'; };
    }

    async function forceUnmute() {
        if (window.mainWidget) {
            // 1. API Calls
            try {
                await window.mainWidget.micOn?.();
                await window.mainWidget.unmute?.();
            } catch(e) {
                console.warn("Force unmute API error", e);
            }
            // 2. Nuclear Shadow DOM Unmute
            try {
                const shadow = window.mainWidget.shadowRoot;
                if (shadow) {
                    const v = shadow.querySelector('video');
                    const a = shadow.querySelector('audio');
                    if (v) { v.muted = false; v.volume = 1.0; v.play(); }
                    if (a) { a.muted = false; a.volume = 1.0; a.play(); }
                }
            } catch(e) {}
        }
    }

    function activateTess() {
        console.log("🖱️ Click detected: Capturing user gesture for audio...");
        
        // 1. Try to pre-warm audio
        try {
            if (window.mainWidget && typeof window.mainWidget.micOn === "function") {
                window.mainWidget.micOn();
            }
        } catch(e) { console.warn("Audio pre-check:", e); }

        // 2. NUKE THE SPLASH WIDGET
        const splashWidget = document.getElementById('splash-widget');
        if (splashWidget) {
            splashWidget.innerHTML = '';
            if (splashWidget.parentNode) {
                splashWidget.parentNode.removeChild(splashWidget);
            }
        }

        // 3. Remove the overlay
        const overlay = document.getElementById('splashOverlay');
        if (overlay) overlay.remove();

        // 4. CREATE MAIN WIDGET (Fast Transition)
        setTimeout(() => {
            if (!window.mainWidget || !document.body.contains(window.mainWidget)) {
                window.mainWidget = createMainWidget();
                // CRITICAL: Set hide-ui to prevent text messages
                window.mainWidget.setAttribute('hide-ui', 'true');
                document.body.appendChild(window.mainWidget);
            }
            
            window.mainWidget.style.display = 'block';
            window.mainWidget.setAttribute('controlled-widget-state', 'active');
            
            // 5. Turn on mic with proper async handling
            setTimeout(async () => {
                console.log("🎤 Finalizing audio state...");
                try {
                    if (window.mainWidget && typeof window.mainWidget.micOn === 'function') {
                        await window.mainWidget.micOn();
                        await window.mainWidget.unmute?.();
                        console.log("✅ Microphone activated");
                        
                        // Force unmute shadow DOM as backup
                        await forceUnmute();
                        
                        // Send welcome message (audio only due to hide-ui)
                        setTimeout(() => {
                            if (window.mainWidget && typeof window.mainWidget.sendMessage === 'function') {
                                window.mainWidget.sendMessage("Hi! I'm Tess. How can I help you today?");
                            }
                        }, 1000);
                    }
                } catch (e) {
                    console.error("❌ Mic activation failed:", e);
                    // Fallback to forceUnmute
                    forceUnmute();
                }
            }, 800);
        }, 100);
    }

    function showPersistentAvatar() {
        const config = window.BotemiaConfig.modules?.splashScreen;
        const persistentConfig = config?.persistentButton || {};
        
        // Get position from config
        const position = persistentConfig.position || 'bottom-left';
        console.log("📌 Avatar position from config:", position);
        
        // Remove existing avatar button if any
        const existingBtn = document.getElementById('persistent-avatar-btn');
        if (existingBtn) existingBtn.remove();
        
        // Create avatar button
        const avatarBtn = document.createElement('div');
        avatarBtn.id = 'persistent-avatar-btn';
        
        // Apply position based on dropdown selection
        let positionStyles = '';
        
        switch(position) {
            case 'bottom-left':
                positionStyles = 'bottom: 20px; left: 20px;';
                break;
            case 'bottom-right':
                positionStyles = 'bottom: 20px; right: 20px;';
                break;
            case 'middle-left':
                positionStyles = 'top: 50%; left: 20px; transform: translateY(-50%);';
                break;
            case 'middle-right':
                positionStyles = 'top: 50%; right: 20px; transform: translateY(-50%);';
                break;
            default:
                positionStyles = 'bottom: 20px; left: 20px;';
        }
        
        // Style the avatar button - with !important to override page CSS
        avatarBtn.style.cssText = `
            position: fixed !important;
            ${positionStyles.replace(/;/g, ' !important;')}
            width: 180px !important;
            height: 180px !important;
            border-radius: 50% !important;
            background: linear-gradient(135deg, ${persistentConfig.gradientTop || '#f8c400'} 0%, ${persistentConfig.gradientBottom || '#d4a000'} 100%) !important;
            cursor: pointer !important;
            z-index: 999999 !important;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3) !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            overflow: hidden !important;
            transition: transform 0.3s ease !important;
        `;
        
        // DEBUG: Check if styles were applied
        console.log("Applied position styles:", {
            bottom: avatarBtn.style.bottom,
            left: avatarBtn.style.left,
            top: avatarBtn.style.top,
            right: avatarBtn.style.right,
            position: avatarBtn.style.position
        });
        
        // Check for video URL first
        const tessVideoUrl = config?.tessVideoUrl;
        
        if (tessVideoUrl) {
            // Create video element for talking avatar
            const video = document.createElement('video');
            video.src = tessVideoUrl;
            video.autoplay = true;
            video.loop = true;
            video.muted = true;
            video.playsInline = true;
            // Get video fit setting from config
            const videoFit = config?.tessVideoFit || 'cover';
            video.style.cssText = `
                width: 180px;
                height: 180px;
                object-fit: ${videoFit};
                border: none;
                pointer-events: none;
            `;
            avatarBtn.appendChild(video);
            
            // Add "Ask Tess 👆" text overlay at bottom
            const textOverlay = document.createElement('div');
            textOverlay.style.cssText = `
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
                color: #f8c400;
                text-align: center;
                padding: 15px 5px 8px 5px;
                font-size: 18px;
                font-weight: bold;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 4px;
                pointer-events: none;
            `;
            textOverlay.innerHTML = `Ask Tess <span style="font-size: 20px;">👆</span>`;
            avatarBtn.appendChild(textOverlay);
            
        } else {
            // Fallback to image if no video
            const tessImage = config?.tessImage;
            if (tessImage) {
                avatarBtn.innerHTML = `<img src="${tessImage}" style="width: 170px; height: 170px; border-radius: 50%; object-fit: cover; border: 3px solid white;">`;
            } else {
                // Fallback icon
                avatarBtn.innerHTML = `<i class="fas fa-user-circle" style="font-size: 140px; color: white;"></i>`;
            }
        }
        // ===== END REPLACEMENT =====
        
        // Add hover effect
        avatarBtn.addEventListener('mouseenter', () => {
            avatarBtn.style.transform = 'scale(1.1)';
        });
        avatarBtn.addEventListener('mouseleave', () => {
            avatarBtn.style.transform = 'scale(1)';
        });
        
        // Click handler
        avatarBtn.addEventListener('click', () => {
            console.log("🖱️ Avatar button clicked - activating Tess");
            avatarBtn.remove();
            activateTess();
        });
        
        document.body.appendChild(avatarBtn);
        console.log(`✅ Avatar button created at ${position}`);
    }

    function justBrowsing() {
        console.log("👆 Just Browsing clicked - showing persistent avatar");
        
        // Remove splash screen elements
        const overlay = document.getElementById('splashOverlay');
        if (overlay) overlay.remove();

        const splashWidget = document.getElementById('splash-widget');
        if (splashWidget) splashWidget.remove();

        
        // Get splash config for persistent button settings
        const config = window.BotemiaConfig.modules?.splashScreen;
        if (config?.persistentButton?.enabled) {
            // Show persistent avatar button
            showPersistentAvatar();
        } else {
            // Fallback to showing main widget directly
            if (!window.mainWidget || !document.body.contains(window.mainWidget)) {
                window.mainWidget = createMainWidget();
                document.body.appendChild(window.mainWidget);
            }
            window.mainWidget.style.display = 'block';
        }
    }

    window.disableBridgeTriggers = false;
    window.addEventListener('message', function(event) {
        if (event.data.type === 'DASHBOARD_COMMAND') {
            if (event.data.command === 'toggleOverlays') { window.disableBridgeTriggers = event.data.disabled; }
            return;
        }
        if (event.data.type === 'MODULE_TRIGGERED' && !window.disableBridgeTriggers) { window.showModule(event.data.module, event.data.triggerPhrase); }
    });

    // ===== LOAD WIDGET =====
    function initWidget() {
        if (document.querySelector('lemon-slice-widget')) { console.log('✅ Widget already exists'); return; }
        setTimeout(() => { showSplash(); }, 100);
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@lemonsliceai/lemon-slice-widget';
        script.type = 'module';
        script.onload = () => { console.log('✅ Widget script loaded'); };
        script.onerror = () => console.error('❌ Failed to load widget');
        document.head.appendChild(script);
    }

    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', initWidget); }
    else { initWidget(); }

    console.log('✅ Botemia Bridge v5.4 loaded for', window.BotemiaConfig.name);
    class PreQualificationController {
        constructor() {
            this.isActive = false;
            this.currentStep = 0;
            this.script = PRE_QUAL_SCRIPT; // Embedded directly!
            this.answers = {};
            this.setupMessageListener();
        }

        setupMessageListener() {
            window.addEventListener('message', (event) => {
                if (event.data.type === 'START_PRE_QUAL') {
                    console.log('🎯 Starting pre-qualification interview');
                    this.loadAndStartInterview();
                }
                if (event.data.type === 'TRIGGER_DETECTED' && event.data.phrase === 'I want to get pre-qualified') {
                    this.loadAndStartInterview();
                }
            });
        }

        async loadAndStartInterview() {
            console.log('🎯 Starting pre-qualification with embedded script');
            
            // Script is already embedded! No fetch needed.
            this.script = PRE_QUAL_SCRIPT;
            
            console.log(`✅ Loaded ${this.script.steps?.length || 0} steps from embedded script`);
            this.startInterview();
        }

        async startInterview() {
            if (!this.script || !this.script.steps) return;
            
            // 🔥 DISABLE DEFAULT LEMONSLICE RESPONSES DURING PRE-QUAL
            // This prevents Tess from talking over herself
            if (window.mainWidget) {
                window.mainWidget.setAttribute('hide-ui', 'true');
                console.log('🔇 Disabled default responses during pre-qual');
            }
            // Disable bridge triggers to prevent interruptions
            window.disableBridgeTriggers = true;
            
            this.isActive = true;
            this.currentStep = 0;
            const tessSteps = this.script.steps.filter(step => step.speaker === 'tess');
            
            // Get the widget
            const widget = document.querySelector('lemon-slice-widget');
            if (!widget) {
                console.error('No widget found');
                // Re-enable if error
                window.disableBridgeTriggers = false;
                if (window.mainWidget) window.mainWidget.setAttribute('hide-ui', 'false');
                return;
            }

            // Make sure widget is active
            widget.setAttribute('controlled-widget-state', 'active');
            
            // Small delay for widget to wake up
            await new Promise(r => setTimeout(r, 500));

            for (let step of tessSteps) {
                if (!this.isActive) break;
                
                console.log('Sending:', step.text);
                try {
                    await widget.sendMessage(step.text);
                } catch (e) {
                    console.error('Failed to send:', e);
                }
                
                await this.waitForResponse(step);
            }
            
            // Send email after interview completes
            await this.sendEmail();
            
            // 🔥 RE-ENABLE DEFAULT RESPONSES AFTER PRE-QUAL COMPLETES
            if (window.mainWidget) {
                window.mainWidget.setAttribute('hide-ui', 'false');
                console.log('🔊 Re-enabled default responses');
            }
            window.disableBridgeTriggers = false;
            
            this.isActive = false;
        }

        waitForResponse(step) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log('Response received for:', step.field);
                    // Store answer (you will need to capture actual response)
                    if (step.field) {
                        this.answers[step.field] = "User response"; // Replace with actual capture
                    }
                    resolve();
                }, 3000);
            });
        }

            async sendEmail() {
            console.log("📧 Sending pre-qualification emails...");
            
            try {
                // ===== EMAIL 1: TO LOAN OFFICER (YOU) =====
                await emailjs.send(
                    "service_b9bppgb",
                    "template_uix9cyx", // Template with ALL details
                    {
                        to_email: "loans@clientcompany.com",
                        cc_email: "",
                        subject: `New Pre-Qual Lead: ${this.answers.firstName || "Client"} ${this.answers.lastName || ""}`,
                        first_name: this.answers.firstName || "",
                        last_name: this.answers.lastName || "",
                        email: this.answers.email || "",
                        phone: this.answers.phone || "",
                        full_answers: JSON.stringify(this.answers, null, 2)
                    }
                );
                console.log("✅ Loan officer email sent");

                // ===== EMAIL 2: TO CLIENT (DEMO / CONFIRMATION) =====
                if (this.answers.email) {
                    await emailjs.send(
                        "service_b9bppgb",
                        "template_8kx812d", // Simpler template
                        {
                            to_email: this.answers.email, // CLIENT email
                            first_name: this.answers.firstName || "Valued Client",
                            message: "Thank you for completing your pre-qualification! A loan officer will contact you within 15 minutes."
                        }
                    );
                    console.log("✅ Client confirmation email sent");
                }
            } catch (error) {
                console.error("❌ Failed to send emails:", error);
            }
        }
    }

    // ===== CLIENT ANNOUNCEMENT FUNCTION =====
    function announceToTCS() {
        // Try opener first
        if (window.opener) {
            window.opener.postMessage({
                type: 'BRIDGE_ACTIVE',
                clientId: window.BotemiaConfig.id,
                url: window.location.href
            }, '*');
        }
        
        // Also broadcast to any listening TCS
        const channel = new BroadcastChannel('botemia-discovery');
        channel.postMessage({
            type: 'CLIENT_INFO',
            clientId: window.BotemiaConfig.id,
            url: window.location.href
        });
        
        console.log('📢 Announced to TCS via broadcast');
    }

    // Call it when bridge loads
    setTimeout(announceToTCS, 2000);

    // ===== TCS MESSAGE HANDLER =====
    window.addEventListener('message', function(event) {
        // Log for debugging
        console.log('📨 Client received message:', event.data?.type);
        
        // 1. HANDSHAKE: TCS says "I'm Ready"
        if (event.data?.type === 'TCS_READY') {
            console.log('✅ TCS Ready signal received! Responding...');
            
            // Respond back so TCS knows we are here
            if (event.source) {
                event.source.postMessage({
                    type: 'CLIENT_INFO',
                    clientId: window.BotemiaConfig.id,
                    name: window.BotemiaConfig.name,
                    url: window.location.href,
                    timestamp: Date.now(),
                    status: 'ready'
                }, '*');
                
                console.log('📤 Sent CLIENT_INFO to TCS');
            }
        }
        
        // 2. COMMANDS: Handle triggers from TCS
        if (event.data?.type === 'TCS_COMMAND') {
            console.log('🎯 Command received:', event.data.command);
            
            switch(event.data.command) {
                case 'START_PRE_QUAL':
                    if (window.preQualController) {
                        window.preQualController.loadAndStartInterview();
                    }
                    break;
                    
                case 'SHOW_TESTIMONIAL':
                    console.log('Show testimonial:', event.data.data);
                    // Add your testimonial display logic here
                    break;
                    
                case 'SHOW_VIDEO':
                    console.log('Show video:', event.data.data);
                    // Add your video display logic here
                    break;
                    
                case 'SHOW_SMART_SCREEN':
                    console.log('Show smart screen:', event.data.data);
                    // Add your smart screen logic here
                    break;
            }
        }
        
        // 3. PING: Health check from TCS
        if (event.data?.type === 'PING') {
            if (event.source) {
                event.source.postMessage({
                    type: 'PONG',
                    clientId: window.BotemiaConfig.id,
                    timestamp: Date.now()
                }, '*');
            }
        }
    });

    console.log('✅ TCS message listener installed');
    window.preQualController = new PreQualificationController();

})();