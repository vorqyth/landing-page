'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Lock, Zap, BookOpen, Users, Shield, AlertCircle, Timer } from 'lucide-react'

// --- CONFIGURATION ---
const PROXYCHECK_API_KEY = 'Lik3cING6PMbrHuHo6hPl9iRst3SmsXL';
const AFFMINE_LOCKER_ID = '69f223bbc1f3c';
const SUCCESS_URL = 'success.html'; // Ensure this file exists in your public folder or as a route

export default function Home() {
  const [isBlocked, setIsBlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Load Affmine Script
    const script = document.createElement('script');
    script.src = `https://hubverify.com/cl/clocker.php?id=${AFFMINE_LOCKER_ID}`;
    script.id = 'afmlock';
    script.async = true;
    document.head.appendChild(script);

    // 2. VPN/Proxy Detection
    const checkVPN = async () => {
      try {
        const response = await fetch(`https://proxycheck.io/v2/?key=${PROXYCHECK_API_KEY}&vpn=1&asn=1`);
        const data = await response.json();
        const userIP = Object.keys(data).find(key => key !== 'status' && key !== 'message');
        
        if (userIP && (data[userIP].proxy === 'yes' || data[userIP].type === 'VPN')) {
          setIsBlocked(true);
        }
      } catch (error) {
        console.error('Security check failed', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkVPN();

    return () => {
      if (document.getElementById('afmlock')) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleVerifyClick = () => {
    if (isBlocked) {
      alert("Security Alert: VPN/Proxy detected. Please disable it to continue.");
      return;
    }

    // Call Affmine Locker
    if (typeof (window as any).call_locker === "function") {
      (window as any).call_locker();
    } else {
      // Fallback if script fails to load
      window.location.href = SUCCESS_URL;
    }
  };

  if (isBlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-6 text-center">
        <Card className="max-w-md p-8 border-destructive/50 bg-destructive/5">
          <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Access Denied</h1>
          <p className="text-muted-foreground">
            Our security system has detected a VPN or Proxy connection. To maintain the integrity of our platform, access is only permitted from genuine residential connections.
          </p>
          <Button className="mt-6" onClick={() => window.location.reload()}>Try Again Without VPN</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background via-background to-secondary/5">
      
      {/* SCARCITY BANNER */}
      <div className="w-full bg-accent/10 border-b border-accent/20 py-2 px-4 text-center">
        <p className="text-xs sm:text-sm font-medium text-accent flex items-center justify-center gap-2">
          <Timer className="h-4 w-4" />
          Limited Access: This portal will automatically close after 500 successful downloads to maintain strategy quality.
        </p>
      </div>

      {/* HERO SECTION */}
      <section className="relative w-full border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:py-32">
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Trust Badge */}
            <div className="flex items-center justify-center sm:justify-start">
              <Badge variant="outline" className="gap-2 border-border bg-secondary/30 text-foreground">
                <Shield className="h-3 w-3" />
                Verified & Secure System
              </Badge>
            </div>

            {/* Main Title */}
            <h1 className="max-w-2xl text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Invest your time in success
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Access a comprehensive guide to growing a sustainable software business through proven, low-competition channels and practical execution strategies.
            </p>

            {/* Secondary Trust Element */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span>Premium digital resource • Legitimate value • Transparent process</span>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLOSURE SECTION */}
      <section className="w-full border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">How This Works</h2>
            
            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
              <Card className="border-border bg-secondary/30 p-6">
                <div className="flex gap-4">
                  <Lock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Third-Party Verification</h3>
                    <p className="text-sm text-muted-foreground">
                      Access to this resource requires completion of a third-party verification process. This ensures the integrity of the offer and protects both parties.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-border bg-secondary/30 p-6">
                <div className="flex gap-4">
                  <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Accurate Information Required</h3>
                    <p className="text-sm text-muted-foreground">
                      You must provide real, accurate personal and location information. VPN, proxy, and geo-bypass attempts are not permitted and will result in denial of access.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="rounded-lg border border-border/50 bg-secondary/10 p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Important:</strong> This page uses third-party services to verify your identity and location. By proceeding, you agree to use only accurate information. Fraudulent submissions, VPN/proxy use, and location spoofing attempts violate our terms and may result in denial of access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="w-full border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-foreground">What You Get</h2>

            <div className="space-y-6">
              <Card className="border-border bg-secondary/30 p-8">
                <div className="flex gap-4 mb-4">
                  <BookOpen className="h-8 w-8 text-accent flex-shrink-0" />
                  <h3 className="text-xl font-semibold text-foreground">Complete Business Resource</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A practical, detailed guide covering the real strategies for building a profitable software business. This isn&apos;t theory—it&apos;s actionable methodology.
                </p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <Zap className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Low-competition client acquisition channels and tactics</span>
                  </div>
                  <div className="flex gap-3">
                    <Zap className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Proven frameworks for executing small projects successfully</span>
                  </div>
                  <div className="flex gap-3">
                    <Zap className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Landing page strategies and conversion optimization</span>
                  </div>
                  <div className="flex gap-3">
                    <Zap className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Practical steps for scaling from solo to small team</span>
                  </div>
                  <div className="flex gap-3">
                    <Zap className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Real-world case studies and examples</span>
                  </div>
                </div>
              </Card>

              <Card className="border-border bg-accent/5 p-8 border-accent/30">
                <div className="flex gap-4 mb-4">
                  <Users className="h-8 w-8 text-accent flex-shrink-0" />
                  <h3 className="text-xl font-semibold text-foreground">Referral Rewards</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Share access with others and earn account credit:
                </p>
                <div className="rounded-lg bg-secondary/50 p-4 mb-4">
                  <div className="grid gap-4 sm:grid-cols-3 text-center">
                    <div>
                      <p className="text-2xl font-bold text-accent">$5</p>
                      <p className="text-sm text-muted-foreground">Your credit</p>
                    </div>
                    <div className="flex items-center justify-center">
                      <p className="text-muted-foreground">+</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-accent">$5</p>
                      <p className="text-sm text-muted-foreground">Per referral</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Credit can be applied to future purchases and upgrades. Referrals require completion of the same verification process.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFICATION CTA SECTION */}
      <section className="w-full border-b border-border bg-secondary/5">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Ready to Access Your Resource?</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Complete the verification process below. It takes just a few minutes and ensures the security and legitimacy of our platform.
              </p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <Button
                onClick={handleVerifyClick}
                size="lg"
                className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg h-auto"
              >
                <Lock className="h-5 w-5" />
                Complete Verification to Unlock Access
              </Button>

              <p className="text-xs text-muted-foreground text-center max-w-md">
                By clicking above, you will be taken to our secure third-party verification service. Your information is handled according to our Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="w-full border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="what-is-this" className="border-border">
                <AccordionTrigger className="text-foreground hover:text-accent">
                  What exactly is this resource?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  This is a comprehensive digital guide covering practical strategies for building and scaling a sustainable software business. It includes proven methodologies for client acquisition, project execution, and business growth—all written based on real experience, not theory.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="why-verify" className="border-border">
                <AccordionTrigger className="text-foreground hover:text-accent">
                  Why is verification required?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Verification protects the value and integrity of this resource. It prevents fraud, ensures compliance with regulations, and maintains a legitimate user base. Third-party verification also protects your data and ensures legitimate distribution.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="why-no-vpn" className="border-border">
                <AccordionTrigger className="text-foreground hover:text-accent">
                  Why are VPN/proxy users blocked?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  VPN and proxy detection prevents fraudulent access attempts, geo-bypass schemes, and ensures compliance with geographic and regulatory requirements. We verify your real location to maintain the integrity of our verification system.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-12 px-6 border-t border-border bg-background">
        <div className="mx-auto max-w-4xl flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">© 2026 Elite Strategies. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="privacy.html" className="text-sm text-muted-foreground hover:text-accent">Privacy Policy</a>
            <a href="terms.html" className="text-sm text-muted-foreground hover:text-accent">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
