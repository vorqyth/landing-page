'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Lock, Zap, BookOpen, Users, Shield, AlertCircle } from 'lucide-react'

export default function Home() {
  const [vpnBlocked, setVpnBlocked] = useState(false)
  const [vpnChecked, setVpnChecked] = useState(false)

  useEffect(() => {
    const checkProxy = async () => {
      try {
        const res = await fetch(
          'https://proxycheck.io/v2/?key=Lik3cING6PMbrHuHo6hPl9iRst3SmsXL&vpn=1&asn=1'
        )
        const data = await res.json()
        const ip = Object.keys(data).find((k) => k !== 'status')
        if (ip && data[ip]?.proxy === 'yes') {
          setVpnBlocked(true)
        }
      } catch {
        // If check fails, allow access
      } finally {
        setVpnChecked(true)
      }
    }
    checkProxy()
  }, [])

  const handleVerifyClick = () => {
    if (typeof window !== 'undefined' && typeof (window as any).call_locker === 'function') {
      (window as any).call_locker()
    }
  }

  if (!vpnChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground text-lg">Verifying your connection...</p>
      </div>
    )
  }

  if (vpnBlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-6">
        <div className="max-w-md text-center space-y-4">
          <AlertCircle className="h-12 w-12 text-destructive mx-auto" />
          <h1 className="text-2xl font-bold text-foreground">Access Denied</h1>
          <p className="text-muted-foreground">
            VPN, proxy, and geo-bypass connections are not permitted. Please disable your VPN or proxy and try again.
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Script
        src="https://hubverify.com/cl/clocker.php?id=69f223bbc1f3c"
        id="afmlock"
        strategy="afterInteractive"
      />

      <div className="min-h-screen w-full bg-gradient-to-b from-background via-background to-secondary/5">

        {/* HERO SECTION */}
        <section className="relative w-full border-b border-border">
          <div className="mx-auto max-w-4xl px-6 py-20 sm:py-32">
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex items-center justify-center sm:justify-start">
                <Badge variant="outline" className="gap-2 border-border bg-secondary/30 text-foreground">
                  <Shield className="h-3 w-3" />
                  Verified & Secure
                </Badge>
              </div>
              <h1 className="max-w-2xl text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Invest your time in success
              </h1>
              <p className="max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Access a comprehensive guide to growing a sustainable software business through proven, low-competition channels and practical execution strategies.
              </p>
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
                  <strong className="text-foreground">Important:</strong> This page uses third-party services to verify your identity and location. By proceeding, you agree to use only accurate information. Fraudulent submissions, VPN/proxy use, and location spoofing attempts violate our terms and may result in legal action.
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
                    {[
                      'Low-competition client acquisition channels and tactics',
                      'Proven frameworks for executing small projects successfully',
                      'Landing page strategies and conversion optimization',
                      'Practical steps for scaling from solo to small team',
                      'Real-world case studies and examples',
                    ].map((item) => (
                      <div key={item} className="flex gap-3">
                        <Zap className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="border-border bg-accent/5 p-8 border-accent/30">
                  <div className="flex gap-4 mb-4">
                    <Users className="h-8 w-8 text-accent flex-shrink-0" />
                    <h3 className="text-xl font-semibold text-foreground">Referral Rewards</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">Share access with others and earn account credit:</p>
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
                  Unlock Access
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
                  <AccordionTrigger className="text-foreground hover:text-accent">What exactly is this resource?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    This is a comprehensive digital guide covering practical strategies for building and scaling a sustainable software business. It includes proven methodologies for client acquisition, project execution, and business growth—all written based on real experience, not theory.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="why-verify" className="border-border">
                  <AccordionTrigger className="text-foreground hover:text-accent">Why is verification required?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Verification protects the value and integrity of this resource. It prevents fraud, ensures compliance with regulations, and maintains a legitimate user base. Third-party verification also protects your data and ensures legitimate distribution.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="why-no-vpn" className="border-border">
                  <AccordionTrigger className="text-foreground hover:text-accent">Why are VPN/proxy users blocked?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    VPN and proxy detection prevents fraudulent access attempts, geo-bypass schemes, and ensures compliance with geographic and regulatory requirements. We verify your real location to maintain the integrity of our verification system.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="after-verification" className="border-border">
                  <AccordionTrigger className="text-foreground hover:text-accent">What do I receive after completion?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    After successful verification, you&apos;ll receive immediate access to the complete digital resource. You can download, read, and reference it anytime. You&apos;ll also get a unique account dashboard to manage your access, referrals, and any available credit.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="is-data-stored" className="border-border">
                  <AccordionTrigger className="text-foreground hover:text-accent">Is my information stored and shared?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Your data is handled according to our Privacy Policy. We only collect information necessary for verification and access management. We do not sell your data to third parties. Verification data is processed securely by our third-party partner under strict data protection agreements.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="support" className="border-border">
                  <AccordionTrigger className="text-foreground hover:text-accent">What if I have issues or questions?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    You can reach our support team through the contact form below or by email. We typically respond within 24 hours. Verification issues are handled directly by our third-party partner&apos;s support team, and we&apos;ll assist in coordinating resolution.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* PRIVACY POLICY SECTION */}
        <section id="privacy" className="w-full border-b border-border">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Privacy Policy</h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p><strong className="text-foreground">Last updated:</strong> January 2024</p>
                <p>We are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit this page.</p>
                <h3 className="text-base font-semibold text-foreground">Information We Collect</h3>
                <p>We collect only the information necessary to facilitate the verification process, including your IP address for fraud prevention and location verification purposes.</p>
                <h3 className="text-base font-semibold text-foreground">How We Use Your Information</h3>
                <p>Your information is used solely to verify your identity and location, prevent fraudulent access, and comply with applicable regulations. We do not sell or share your data with third parties except our verification service provider, who operates under strict data protection agreements.</p>
                <h3 className="text-base font-semibold text-foreground">Third-Party Services</h3>
                <p>This page uses ProxyCheck.io for VPN and proxy detection, and Affmine/HubVerify for content verification. These services have their own privacy policies governing the data they process.</p>
                <h3 className="text-base font-semibold text-foreground">Data Retention</h3>
                <p>We retain only the minimum data required for verification integrity. You may request deletion of your data at any time by contacting us.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TERMS OF SERVICE SECTION */}
        <section id="terms" className="w-full border-b border-border">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Terms of Service</h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p><strong className="text-foreground">Last updated:</strong> January 2024</p>
                <p>By accessing this page, you agree to the following terms and conditions. Please read them carefully before proceeding.</p>
                <h3 className="text-base font-semibold text-foreground">Eligibility</h3>
                <p>You must be at least 18 years of age to access this resource. By proceeding, you confirm that you meet this requirement.</p>
                <h3 className="text-base font-semibold text-foreground">Accurate Information</h3>
                <p>You agree to provide only accurate, truthful information during the verification process. Any attempt to use false, misleading, or fraudulent information is strictly prohibited and may result in legal action.</p>
                <h3 className="text-base font-semibold text-foreground">Prohibited Activities</h3>
                <p>The use of VPNs, proxies, or any tools designed to mask your real identity or location is strictly prohibited. Circumvention attempts violate these terms and will result in permanent denial of access.</p>
                <h3 className="text-base font-semibold text-foreground">Intellectual Property</h3>
                <p>All content provided through this resource is protected by intellectual property laws. Reproduction, distribution, or resale without explicit written permission is strictly prohibited.</p>
                <h3 className="text-base font-semibold text-foreground">Limitation of Liability</h3>
                <p>We provide this resource on an as-is basis. We make no warranties regarding the completeness or accuracy of the content. Our liability is limited to the maximum extent permitted by applicable law.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="w-full border-b border-border">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Contact & Support</h2>
              <p className="text-muted-foreground">
                For any questions, issues, or support requests, please use the information below. We aim to respond within 24 business hours.
              </p>
              <Card className="border-border bg-secondary/30 p-6 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">General Inquiries</p>
                  <p className="text-sm text-muted-foreground">For questions about this resource or the verification process, contact us at the email below.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Verification Issues</p>
                  <p className="text-sm text-muted-foreground">If you encountered a problem during verification, please include your reference number and a brief description of the issue.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Response Time</p>
                  <p className="text-sm text-muted-foreground">We typically respond within 24 hours on business days.</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="w-full bg-secondary/20 border-t border-border">
          <div className="mx-auto max-w-4xl px-6 py-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Compliance Notice:</strong> This page facilitates access to digital resources through secure third-party verification. By accessing this resource, you confirm that you are providing accurate information and comply with all applicable terms and conditions.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-3 text-sm">
                <a href="#privacy" className="text-muted-foreground hover:text-accent transition-colors">Privacy Policy</a>
                <a href="#terms" className="text-muted-foreground hover:text-accent transition-colors">Terms of Service</a>
                <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">Contact & Support</a>
              </div>
              <div className="border-t border-border pt-8 text-center text-xs text-muted-foreground">
                <p>© 2024 Premium Digital Resources. All rights reserved. Built with integrity and transparency.</p>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </>
  )
}
