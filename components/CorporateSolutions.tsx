'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Tv, 
  Laptop, 
  ShieldCheck, 
  FileText, 
  Check, 
  Calculator, 
  Send, 
  Sparkles, 
  CheckCircle2,
  Users,
  Download
} from 'lucide-react';

export const CorporateSolutions: React.FC = () => {
  const [packageType, setPackageType] = useState<'workstation' | 'boardroom' | 'creator'>('boardroom');
  const [unitCount, setUnitCount] = useState<number>(10);
  const [includeInstallation, setIncludeInstallation] = useState<boolean>(true);
  const [includeProSupport, setIncludeProSupport] = useState<boolean>(true);
  const [proposalSubmitted, setProposalSubmitted] = useState<boolean>(false);
  const [companyName, setCompanyName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');

  // Base pricing
  const packageRates = {
    workstation: {
      name: 'Executive Computing & Workstation Tier',
      unitBase: 2499, // MacBook Pro / Dell XPS + dual 4K monitors + dock
      desc: 'High-performance silicon workstations, dual calibrated color monitors, noise-cancelling headsets, and ergonomic hardware.'
    },
    boardroom: {
      name: '8K Video Conference & Smart Boardroom Tier',
      unitBase: 6899, // 75" Neo QLED 8K + Sonos Arc Surround + PTZ AI Camera
      desc: 'Flagship 75" to 85" commercial displays, ceiling spatial audio arrays, AI auto-framing 4K cameras, and smart touch control panels.'
    },
    creator: {
      name: 'Creator Studio & Broadcasting Suite',
      unitBase: 4999, // Canon EOS R5 C + DJI Cine Gimbal + Reference Audio
      desc: 'Cinema-grade mirrorless cameras, studio key lights, wireless lavalier audio, and calibrated video editing color suites.'
    }
  };

  const currentPkg = packageRates[packageType];
  const hardwareTotal = currentPkg.unitBase * unitCount;
  const installationFee = includeInstallation ? unitCount * 180 : 0;
  const supportFee = includeProSupport ? unitCount * 250 : 0;
  const corporateDiscount = unitCount >= 10 ? hardwareTotal * 0.12 : 0; // 12% bulk discount
  const grandTotal = hardwareTotal + installationFee + supportFee - corporateDiscount;

  const handleSubmitProposal = (e: React.FormEvent) => {
    e.preventDefault();
    setProposalSubmitted(true);
    setTimeout(() => {
      setProposalSubmitted(false);
      setCompanyName('');
      setContactEmail('');
    }, 4000);
  };

  return (
    <section id="corporate" className="py-16 md:py-24 bg-slate-900/90 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-cyan-400">
            <Building2 className="w-3.5 h-3.5" />
            <span>Commercial, Architectural & Corporate Procurement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Electronics Supply for Businesses & Clients
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From modern conference rooms and creative agency workstation pods to luxury residential smart living fitouts, VoltCore Mart provides authorized hardware supply with dedicated account directors and volume pricing.
          </p>
        </div>

        {/* Corporate Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
              <Tv className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Boardrooms & Video Walls</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Certified commercial display walls (LG OLED / Samsung Neo QLED), Dolby Atmos acoustic ceiling tiles, and one-touch Zoom Rooms integration.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <Laptop className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Workstation Fleets</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Authorized Apple and Dell enterprise provisioning. Bulk zero-touch deployment, serial tracking, asset tagging, and Net-30 invoicing.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">On-Site Calibration & Support</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              White-glove delivery, physical hardware installation, cable management, audio room equalization, and emergency 4-hour replacement guarantee.
            </p>
          </div>
        </div>

        {/* Interactive Corporate Quote Calculator */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            <Calculator className="w-4 h-4" />
            <span>Interactive Client Quotation Estimator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-6">
            Configure Your Hardware Deployment
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-5">
              {/* Package selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 block">Select Solution Tier</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPackageType('boardroom')}
                    className={`p-3 rounded-xl text-left border text-xs transition-all ${
                      packageType === 'boardroom'
                        ? 'bg-slate-900 border-cyan-400 text-white shadow-md'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span className="font-bold block text-sm text-white">Smart Boardroom</span>
                    <span className="text-[11px] text-cyan-400">8K OLED + Spatial Mic</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPackageType('workstation')}
                    className={`p-3 rounded-xl text-left border text-xs transition-all ${
                      packageType === 'workstation'
                        ? 'bg-slate-900 border-cyan-400 text-white shadow-md'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span className="font-bold block text-sm text-white">Workstation Fleet</span>
                    <span className="text-[11px] text-cyan-400">Pro Silicon + Dual Display</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPackageType('creator')}
                    className={`p-3 rounded-xl text-left border text-xs transition-all ${
                      packageType === 'creator'
                        ? 'bg-slate-900 border-cyan-400 text-white shadow-md'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span className="font-bold block text-sm text-white">Creator Studio</span>
                    <span className="text-[11px] text-cyan-400">8K Cameras & Cine Drones</span>
                  </button>
                </div>
                <p className="text-xs text-slate-400 pt-1 leading-relaxed">{currentPkg.desc}</p>
              </div>

              {/* Unit Count Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">Deployment Scale / Units</span>
                  <span className="text-cyan-400 font-bold">{unitCount} Rooms / Desks</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="50"
                  value={unitCount}
                  onChange={(e) => setUnitCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>2 Units</span>
                  <span>10 Units (12% Volume Discount)</span>
                  <span>50 Units</span>
                </div>
              </div>

              {/* Service Checkboxes */}
              <div className="space-y-2.5 pt-2 border-t border-slate-800 text-xs">
                <label className="flex items-center gap-2 text-slate-200 hover:text-white cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={includeInstallation}
                    onChange={(e) => setIncludeInstallation(e.target.checked)}
                    className="rounded border-slate-700 text-cyan-500 bg-slate-900"
                  />
                  <span>Certified White-Glove On-Site Assembly & Acoustic Calibration (+$180/unit)</span>
                </label>

                <label className="flex items-center gap-2 text-slate-200 hover:text-white cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={includeProSupport}
                    onChange={(e) => setIncludeProSupport(e.target.checked)}
                    className="rounded border-slate-700 text-cyan-500 bg-slate-900"
                  />
                  <span>3-Year Enterprise Care with 4-Hour On-Site Swap Warranty (+$250/unit)</span>
                </label>
              </div>
            </div>

            {/* Right Side: Estimated Calculation Breakdown */}
            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Itemized Cost Estimate
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                  Corporate Net-30 Eligible
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>{currentPkg.name} ({unitCount}x)</span>
                  <span className="font-semibold text-white">${hardwareTotal.toLocaleString()}</span>
                </div>

                {includeInstallation && (
                  <div className="flex justify-between">
                    <span>On-Site Integration & Rigging</span>
                    <span className="font-semibold text-white">${installationFee.toLocaleString()}</span>
                  </div>
                )}

                {includeProSupport && (
                  <div className="flex justify-between">
                    <span>3-Year Enterprise Care SLA</span>
                    <span className="font-semibold text-white">${supportFee.toLocaleString()}</span>
                  </div>
                )}

                {corporateDiscount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span>Volume Procurement Discount (12%)</span>
                    <span>-${corporateDiscount.toLocaleString()}</span>
                  </div>
                )}
              </div>

              {/* Total Figure */}
              <div className="pt-3 border-t border-slate-800 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Estimated Quotation</span>
                  <span className="text-2xl sm:text-3xl font-black text-white">
                    ${grandTotal.toLocaleString()}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 text-right">
                  Tax exempt with commercial ID
                </span>
              </div>

              {/* Proposal Request Form */}
              {proposalSubmitted ? (
                <div className="p-4 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs space-y-1 text-center">
                  <CheckCircle2 className="w-6 h-6 mx-auto text-emerald-400" />
                  <p className="font-bold">Official Proposal Dispatched!</p>
                  <p className="text-[11px] text-slate-300">
                    A formal itemized PDF quote with tax exemptions has been generated for your review.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitProposal} className="space-y-2 pt-2">
                  <input
                    type="text"
                    required
                    placeholder="Company or Client Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work or Client Email for PDF Delivery"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Formal Client Proposal</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
