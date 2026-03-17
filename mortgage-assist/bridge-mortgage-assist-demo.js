// Botemia Bridge for Mortgage Assist Demo
// Generated: 3/17/2026, 1:51:17 AM
// Client ID: mortgage-assist-demo
// Version: 5.4 - BATON PASS FIX

(function() {
    "use strict";

    // ===== EMBEDDED CLIENT CONFIGURATION =====
    window.BotemiaConfig = {
    "id": "mortgage-assist-demo",
    "name": "Mortgage Assist Demo",
    "agentId": "agent_7b0776ef6b855de5",
    "widgetId": "",
    "apiKey": "",
    "environment": "production",
    "industry": "mortgage",
    "modules": {
        "splashScreen": {
            "enabled": true,
            "agentId": "agent_7b0776ef6b855de5",
            "title": "Meet Tess",
            "subtitle": "Your Personal AI Smart Guide",
            "tessVideoUrl": "https://fcgbusobfdwnpoqyuzoe.supabase.co/storage/v1/object/sign/processed-videos/tess-button.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjJjNGVkZS0wYzRiLTQyMzAtOGE5MC1jMDhmNjhlNDVkNTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcm9jZXNzZWQtdmlkZW9zL3Rlc3MtYnV0dG9uLm1wNCIsImlhdCI6MTc3MzczNTM0MywiZXhwIjoxODA1MjcxMzQzfQ.k_NZ1_1yFlV4NPHcxS6mDtkblGmBw1iqHOkcS4iYtfs",
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
                "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAUCAYAAADIpHLKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAD2EAAA9hAag/p2kAAAWqSURBVGhD7ZpbUJVVFMetl6aZbm++9tJTDz010wy9VS/l9BCiTlNNpIADSeNMjVSARU1gaoxSqYyOKEUXxBB1SCsrvKRYDVZeISFhPIrkheR++bfXOWfBZrG+fT5O55jg95tZ47f+/7U/tvt8a/b+DszCFBgZHcWoiYCAWwXPBhkaGsbXDU1YsaEWf53vQlvHJbyUtw4LTVy5dt00SrQwIGAG49kgg6ZBqnYewJMLi5FbtBnZhRuRMi8fKWn5eOWdzVhftRehzivR6oCAmYmzQT7fedA0RUE45iwqQe03jajd24jHni/C05kr8PrKKpxo6YiOUBjsB3ouI9huAqYraoP09PZj/9GTWPruFjxummFxQTmq63+KusAnOxqQtuQDPGoa583Vn6HpRFu4oSbQY3aX0KloMpHZs9PHQiOWf6uQzHVI9vrac0/2z0omkxqk8VgLKmsbkLN8E55dugZlW+vxw5HjUXecL3YfQol5P0nNWY28lZ9i+54jON7cbnaNPqDzLPDn4ci1QqxFi+XHQyLvdaNIxjow8dzXTz3f1yumGxMa5PfT55CVX46H5xZibu5a1Ow5jOGREaDvGtByADi2KxIXTgPDA+gfGERFzfdIzV4VPnJVbqoEmuoiETI1HrgWzeXFSyLvdaOw53wzzN/vHLzqWPdzj5uJsQbp6x/EW2ur8UL6a5g3/2VUfbnbvDqY5iBCJ4H1c4G8B4A3THxbGnm3MNDXvlu/+hHvFX+IX9/PAD56BmhtdH4dbC+WXDCXR/jx7GstbGzN5WseY3tedaxrnoZd6zWO9Xh8lyY9qduejcsjpGfXa2NZkzrhqmfsXHp+GWuQ5tYQ/jA7yOXS+RhZfAdQVzjeIP9cAn6pBr5bA+wrA86OH59GB3qA7k5gRwGwIQ3o+A0jtOs4kBO3sXXNk2Gj+VowmkfBaB6FjeZT2MTyNew6bQxrMhjNo2C8chlenobL07DvJ8e6PMKPxrmMqTD5JX2juYFskPYmoPgRIP02YNHtkWagpiEOVgBvPwRUvAhcPBOWBszRy4U9UT/XBOfS55zQNMKlsS5zDenLMTInZE5omo2fMVqNzVT9qdZraDWs2cFoGiF1mRMyJ7xqWJO5HyY2CB2L1pkHPUM0yLB54LsvAH+fAy6b6L1qtCFznEoFcu8Dti8DusyL+YjRDLF+265N2nVNyJzwU0Noul+NYF36Mie8arTwQqvlYFwe4ddn7DrpEZomcY2zg5E5o+lSS1RNLCbvIOsWANvygCsd4kE31+HcxMB1805immPJ3eFGQlfrWHN0X+8N/+tCTpJzTWNkTvipITQ9Hk36Mie8arTwQqvlsPkvvswJu076MteIVSN9r3pNl1qiamIxuUFajwI1ZkdYO8e8b3wcFaP0dQNbsoCyp0xz3AXsKjK7SpvpmfF3DvozlFjISXKuaYyskTkhc0bTWWNd5oTfnDWZEzKPhas+Xo+QfqLrGa861m3Pb63MCa/cpcncD5MbhHaI5gbTBKZBCh8EtmYC9auAq+eBzeb4lXsvkGXeReqWm+NWe3RXGWd42P2CTshJahOXOWHXuXyJXW/7UudgNI/CRvMpbDSfQsOvx9cyGM2jYLxyGYyXLpF1Mmw0jbHHaHWaz8FoHsVUUBrEQA/9qX2RnSLDNMOy+4Gq7EhjUGx71ZylLkaLJ+Lnr321iWq59p9h3eVpeI2zNZfvp0Ze27Du5TMuX3qcS51x+S5N8wiXJ7FrvcZ46YxrLCF9Wevy/KI3CMFNUvoEkGmaItOU5twJVGZEfnE4zdEWbKqLmIh7BCSPRHwW3g1CUJOc2Q+UpJij1T3ApueMFvsINR3gxdPCL9pYjoD/n0R8Fu4GCWOapO1noHxBpGFmEPYDHe9iJuIeAckhEZ/HrFAohEREV1cXentjf8UbEDCd8LGDBATcqgD/Asf+ibD9+rycAAAAAElFTkSuQmCC"
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
            "images": [
                {
                    "name": "Tess Intro",
                    "url": "blob:https://mobilewise.netlify.app/22400717-b033-4eaf-80ab-4b35fe5e503a",
                    "caption": "",
                    "link": "",
                    "triggerMatch": [
                        "Hi my name is Tess how can I help you today?"
                    ],
                    "imageSize": "400px",
                    "bgColor": "white",
                    "backdropOpacity": 0.5,
                    "showTitle": true,
                    "borderColor": "#f8c400"
                }
            ]
        },
        "websiteInfo": {
            "triggers": [],
            "infoType": "navigation",
            "action": "showSmartNavigation"
        }
    },
    "updatedAt": "2026-03-17T08:51:17.391Z"
};

    // ===== ADD SPLASH SCREEN CSS =====
    const style = document.createElement('style');
    style.textContent = `
        .splash-avatar-container {
            width: 260px; height: 380px; margin: 0 auto 25px;
            border-radius: 20px; overflow: hidden;
            background: #000;
            box-shadow: 0 20px 30px rgba(0,0,0,0.5);
            border: 2px solid rgba(255,255,255,0.1);
            display: flex; align-items: center; justify-content: center;
            position: relative;
        }
        .splash-avatar-container lemon-slice-widget {
            position: absolute; top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            width: 280px !important; height: 400px !important;
            max-width: none !important; max-height: none !important;
        }
        .splash-card {
            background: radial-gradient(circle at center, #1e4a8a 0%, #0a1a2f 80%);
            border-radius: 48px; padding: 40px 30px;
            max-width: 600px; width: 90%; text-align: center;
            box-shadow: 0 30px 60px rgba(0,0,0,0.6);
            animation: slideUp 0.4s ease;
        }
        .splash-card h1 { color: white; font-size: 2.5rem; margin-bottom: 5px; font-weight: 700; }
        .splash-card h2 { color: rgba(255,255,255,0.9); font-size: 1.2rem; margin-bottom: 20px; font-weight: 300; }
        .button-group { display: flex; gap: 10px; justify-content: center; margin-top: 15px; }
        .primary-btn, .secondary-btn { padding: 12px 20px; border-radius: 40px; font-size: 1rem; font-weight: 600; cursor: pointer; flex: 1; max-width: 200px; border: none; transition: all 0.2s; }
        .primary-btn:hover, .secondary-btn:hover { transform: scale(1.02); }
    `;
    document.head.appendChild(style);

    function createSplashWidget() {
        const widget = document.createElement('lemon-slice-widget');
        widget.setAttribute('agent-id', 'agent_7b0776ef6b855de5');
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
        widget.setAttribute('agent-id', 'agent_7b0776ef6b855de5');
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
            <h1>${config.title || 'Meet Tess'}</h1>
            <h2>${config.subtitle || 'Your Personal AI Smart Guide'}</h2>
            <div class="splash-avatar-container" id="splashAvatarContainer"></div>
            <div class="button-group">
                <button class="primary-btn" id="activateTessBtn" style="background: linear-gradient(145deg, ${config.primaryButton?.gradientTop || '#f8c400'}, ${config.primaryButton?.gradientBottom || '#d4a000'}); color: ${config.primaryButton?.textColor || '#0a0f1e'};">${config.primaryButton?.text || 'Get AI help with Tess'}</button>
                <button class="secondary-btn" id="justBrowsingBtn" style="background: linear-gradient(145deg, ${config.secondaryButton?.gradientTop || '#3a4050'}, ${config.secondaryButton?.gradientBottom || '#2a2f3f'}); color: ${config.secondaryButton?.textColor || '#ffffff'};">${config.secondaryButton?.text || 'Just Browsing'}</button>
            </div>
        `;

        if (config.branding?.name || config.branding?.logo) {
            cardHTML += `
                <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; gap: 6px; color: rgba(255,255,255,0.4); font-size: 0.75rem;">
                    ${config.branding?.logo ? '<img src="' + config.branding.logo + '" style="height: 18px; opacity: 0.6;">' : ''}
                    ${config.branding?.name ? '<span>' + config.branding.name + '</span>' : ''}
                </div>
            `;
        }

        card.innerHTML = cardHTML;

        overlay.appendChild(card);
        document.body.appendChild(overlay);

        const container = document.getElementById('splashAvatarContainer');
        const splashWidget = createSplashWidget();
        container.appendChild(splashWidget);

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
        
        // Get position from config (NOT localStorage)
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
        
        // Style the avatar button
        avatarBtn.style.cssText = `
            position: fixed;
            ${positionStyles}
            width: 180px;
            height: 180px;
            border-radius: 50%;
            background: linear-gradient(135deg, ${persistentConfig.gradientTop || '#f8c400'} 0%, ${persistentConfig.gradientBottom || '#d4a000'} 100%);
            cursor: pointer;
            z-index: 999999;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            position: relative;
            transition: transform 0.3s ease;
        `;
        
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
})();