import React, { useState } from 'react';
import { X, Check, ShieldCheck, QrCode, CreditCard, Banknote, ArrowRight, ArrowLeft, Package, Sparkles, Printer, Instagram, Copy } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ShippingAddress, PaymentMethod, Order } from '../types';

export const CheckoutModal: React.FC = () => {
  const {
    cart,
    isCheckoutOpen,
    setIsCheckoutOpen,
    getSubtotal,
    getDiscountAmount,
    getShippingFee,
    getTotal,
    placeOrder,
    lastPlacedOrder,
    globalParcelNote
  } = useCart();

  const [step, setStep] = useState<'shipping' | 'parcel-note' | 'payment' | 'confirmation'>('shipping');

  // Form states
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    fullName: 'Sophia Bennett',
    email: 'sophia.bennett@example.com',
    phone: '+91 98765 43210',
    addressLine: '42 Blossom Cottage Lane, Rosewood Garden',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400050'
  });

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('upi');
  const [placedOrderDetails, setPlacedOrderDetails] = useState<Order | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  if (!isCheckoutOpen) return null;

  const handleNextToParcelNote = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('parcel-note');
  };

  const handleNextToPayment = () => {
    setStep('payment');
  };

  const handleFinalPay = () => {
    const order = placeOrder(shippingAddress, paymentMethod);
    setPlacedOrderDetails(order);
    setStep('confirmation');
  };

  const handleCopyOrderId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#3B2E2A]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="relative bg-[#FAF7F2] rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#E8DDD3] p-6 sm:p-8">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-[#E8DDD3]">
          <div>
            <span className="text-xs uppercase font-bold text-[#B87B64] tracking-wider block">
              Crochtales Checkout & Parcel Desk
            </span>
            <h3 className="font-serif-crochet text-2xl font-bold text-[#3B2E2A]">
              {step === 'shipping' && '1. Shipping & Delivery Address'}
              {step === 'parcel-note' && '2. Custom Parcel Gift Card'}
              {step === 'payment' && '3. Secure Payment Method'}
              {step === 'confirmation' && 'Order Confirmed! 📦✨'}
            </h3>
          </div>

          {step !== 'confirmation' && (
            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="p-2 rounded-full text-[#5C4D4A] hover:bg-[#F2E8DF] transition-colors"
              id="close-checkout-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Progress Step Bar */}
        {step !== 'confirmation' && (
          <div className="flex items-center justify-between py-4 border-b border-[#E8DDD3] text-xs font-semibold">
            <div className={`flex items-center gap-1.5 ${step === 'shipping' ? 'text-[#B87B64]' : 'text-[#4B6B46]'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 'shipping' ? 'bg-[#B87B64] text-white' : 'bg-[#4B6B46] text-white'}`}>
                1
              </span>
              <span>Shipping</span>
            </div>
            <div className="h-0.5 w-10 bg-[#E8DDD3]" />
            <div className={`flex items-center gap-1.5 ${step === 'parcel-note' ? 'text-[#B87B64]' : step === 'payment' ? 'text-[#4B6B46]' : 'text-[#8C7670]'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 'parcel-note' ? 'bg-[#B87B64] text-white' : step === 'payment' ? 'bg-[#4B6B46] text-white' : 'bg-[#E8DDD3] text-[#5C4D4A]'}`}>
                2
              </span>
              <span>Parcel Note</span>
            </div>
            <div className="h-0.5 w-10 bg-[#E8DDD3]" />
            <div className={`flex items-center gap-1.5 ${step === 'payment' ? 'text-[#B87B64]' : 'text-[#8C7670]'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 'payment' ? 'bg-[#B87B64] text-white' : 'bg-[#E8DDD3] text-[#5C4D4A]'}`}>
                3
              </span>
              <span>Payment</span>
            </div>
          </div>
        )}

        {/* STEP 1: SHIPPING FORM */}
        {step === 'shipping' && (
          <form onSubmit={handleNextToParcelNote} className="space-y-6 pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#5C4D4A]">Full Name</label>
                <input
                  type="text"
                  required
                  value={shippingAddress.fullName}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, fullName: e.target.value })}
                  className="w-full bg-white text-sm text-[#4A3E3D] p-3 rounded-xl border border-[#D9C0AE] focus:outline-none focus:border-[#B87B64]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#5C4D4A]">Email Address</label>
                <input
                  type="email"
                  required
                  value={shippingAddress.email}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, email: e.target.value })}
                  className="w-full bg-white text-sm text-[#4A3E3D] p-3 rounded-xl border border-[#D9C0AE] focus:outline-none focus:border-[#B87B64]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#5C4D4A]">Phone Number (for Delivery Updates)</label>
                <input
                  type="tel"
                  required
                  value={shippingAddress.phone}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })}
                  className="w-full bg-white text-sm text-[#4A3E3D] p-3 rounded-xl border border-[#D9C0AE] focus:outline-none focus:border-[#B87B64]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#5C4D4A]">Pincode / Postal Code</label>
                <input
                  type="text"
                  required
                  value={shippingAddress.pincode}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, pincode: e.target.value })}
                  className="w-full bg-white text-sm text-[#4A3E3D] p-3 rounded-xl border border-[#D9C0AE] focus:outline-none focus:border-[#B87B64]"
                />
              </div>

              <div className="sm:col-span-2 space-y-1">
                <label className="text-xs font-bold text-[#5C4D4A]">Shipping Street Address</label>
                <input
                  type="text"
                  required
                  value={shippingAddress.addressLine}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, addressLine: e.target.value })}
                  className="w-full bg-white text-sm text-[#4A3E3D] p-3 rounded-xl border border-[#D9C0AE] focus:outline-none focus:border-[#B87B64]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#5C4D4A]">City</label>
                <input
                  type="text"
                  required
                  value={shippingAddress.city}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                  className="w-full bg-white text-sm text-[#4A3E3D] p-3 rounded-xl border border-[#D9C0AE] focus:outline-none focus:border-[#B87B64]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#5C4D4A]">State / Region</label>
                <input
                  type="text"
                  required
                  value={shippingAddress.state}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })}
                  className="w-full bg-white text-sm text-[#4A3E3D] p-3 rounded-xl border border-[#D9C0AE] focus:outline-none focus:border-[#B87B64]"
                />
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <span className="text-xs text-[#8C7670]">Total Order Amount: <strong className="text-[#B87B64] font-serif-crochet text-lg">${getTotal().toFixed(2)}</strong></span>
              <button
                type="submit"
                className="px-6 py-3 bg-[#5C4D4A] hover:bg-[#4A3E3D] text-[#FAF7F2] font-semibold text-xs rounded-full shadow-md transition-all flex items-center gap-2"
                id="next-to-parcel-note-btn"
              >
                <span>Continue to Gift Card Note</span>
                <ArrowRight className="w-4 h-4 text-[#E0A96D]" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: CUSTOM PARCEL NOTE PREVIEW */}
        {step === 'parcel-note' && (
          <div className="space-y-6 pt-6">
            <div className="p-6 bg-[#F7EFE7] rounded-3xl border-2 border-[#D9C0AE] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-sm text-[#3B2E2A]">
                  <Sparkles className="w-4 h-4 text-[#B87B64]" />
                  <span>Handwritten Card Live Preview</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider bg-[#E8D3C5] font-bold px-2 py-0.5 rounded-full text-[#5C4D4A]">
                  Wax Seal Finish
                </span>
              </div>

              {/* Simulated Kraft Card */}
              <div className="bg-[#FAF2EA] p-6 rounded-2xl border-2 border-[#D2BBA8] shadow-inner space-y-3 relative font-handwriting">
                <div className="absolute top-3 right-4 w-8 h-8 rounded-full bg-[#903B42] text-white flex items-center justify-center font-bold text-[10px] shadow-sm">
                  🪡
                </div>
                <p className="text-sm text-[#3B2E2A] italic leading-relaxed">
                  "{cart[0]?.parcelNote || globalParcelNote || 'Handmade with love for someone very special!'}"
                </p>
                <div className="pt-3 border-t border-[#D9C0AE]/60 text-right text-xs font-bold text-[#5C4D4A]">
                  — With warmth from Crochtales & Maker (@__crochetales__)
                </div>
              </div>

              <div className="text-xs text-[#6E5D59] flex items-center gap-2">
                <Package className="w-4 h-4 text-[#B87B64]" />
                <span>Included in eco-friendly kraft box with dried lavender sprigs and lavender tissue paper.</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                type="button"
                onClick={() => setStep('shipping')}
                className="px-5 py-2.5 bg-white text-[#5C4D4A] hover:bg-[#F2E8DF] font-semibold text-xs rounded-full border border-[#D9C0AE] flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Shipping
              </button>

              <button
                type="button"
                onClick={handleNextToPayment}
                className="px-6 py-3 bg-[#5C4D4A] hover:bg-[#4A3E3D] text-[#FAF7F2] font-semibold text-xs rounded-full shadow-md transition-all flex items-center gap-2"
                id="next-to-payment-btn"
              >
                <span>Proceed to Payment</span>
                <ArrowRight className="w-4 h-4 text-[#E0A96D]" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: PAYMENT METHOD (UPI / CARD / COD) */}
        {step === 'payment' && (
          <div className="space-y-6 pt-6">
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase text-[#5C4D4A] tracking-wider block">
                Choose Payment Option
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-4 rounded-2xl border-2 text-left transition-all flex flex-col justify-between space-y-2 ${
                    paymentMethod === 'upi'
                      ? 'border-[#B87B64] bg-white ring-2 ring-[#B87B64]/20 shadow-xs'
                      : 'border-[#E8DDD3] bg-white/70 hover:bg-white'
                  }`}
                  id="pay-method-upi"
                >
                  <div className="flex items-center justify-between">
                    <QrCode className="w-5 h-5 text-[#B87B64]" />
                    {paymentMethod === 'upi' && <Check className="w-4 h-4 text-[#4B6B46]" />}
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-[#3B2E2A]">Instant UPI / QR</h5>
                    <p className="text-[10px] text-[#8C7670]">GPay, PhonePe, Paytm</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 rounded-2xl border-2 text-left transition-all flex flex-col justify-between space-y-2 ${
                    paymentMethod === 'card'
                      ? 'border-[#B87B64] bg-white ring-2 ring-[#B87B64]/20 shadow-xs'
                      : 'border-[#E8DDD3] bg-white/70 hover:bg-white'
                  }`}
                  id="pay-method-card"
                >
                  <div className="flex items-center justify-between">
                    <CreditCard className="w-5 h-5 text-[#B87B64]" />
                    {paymentMethod === 'card' && <Check className="w-4 h-4 text-[#4B6B46]" />}
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-[#3B2E2A]">Credit / Debit Card</h5>
                    <p className="text-[10px] text-[#8C7670]">Visa, Mastercard, RuPay</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-4 rounded-2xl border-2 text-left transition-all flex flex-col justify-between space-y-2 ${
                    paymentMethod === 'cod'
                      ? 'border-[#B87B64] bg-white ring-2 ring-[#B87B64]/20 shadow-xs'
                      : 'border-[#E8DDD3] bg-white/70 hover:bg-white'
                  }`}
                  id="pay-method-cod"
                >
                  <div className="flex items-center justify-between">
                    <Banknote className="w-5 h-5 text-[#B87B64]" />
                    {paymentMethod === 'cod' && <Check className="w-4 h-4 text-[#4B6B46]" />}
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-[#3B2E2A]">Cash on Delivery</h5>
                    <p className="text-[10px] text-[#8C7670]">Pay upon doorstep parcel delivery</p>
                  </div>
                </button>
              </div>
            </div>

            {/* UPI QR Simulation Display */}
            {paymentMethod === 'upi' && (
              <div className="p-5 bg-white rounded-2xl border border-[#E8DDD3] flex flex-col sm:flex-row items-center gap-6">
                <div className="w-32 h-32 bg-[#FAF7F2] p-2 rounded-xl border border-[#D9C0AE] flex flex-col items-center justify-center text-center">
                  {/* Simulated QR Pattern */}
                  <div className="w-full h-full border-2 border-dashed border-[#5C4D4A] rounded-lg flex items-center justify-center bg-white p-2">
                    <QrCode className="w-16 h-16 text-[#3B2E2A]" />
                  </div>
                </div>

                <div className="space-y-2 text-center sm:text-left text-xs">
                  <span className="font-bold text-[#3B2E2A] block text-sm">Scan with GPay / PhonePe / Paytm</span>
                  <p className="text-[#6E5D59]">UPI ID: <strong className="text-[#B87B64]">crochtales@upi</strong></p>
                  <p className="text-[11px] text-[#8C7670]">Amount to Pay: <strong>${getTotal().toFixed(2)}</strong></p>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#4B6B46] font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" /> 256-Bit SSL Encrypted & Verified
                  </div>
                </div>
              </div>
            )}

            {/* Card Simulation Display */}
            {paymentMethod === 'card' && (
              <div className="p-5 bg-white rounded-2xl border border-[#E8DDD3] space-y-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-[#5C4D4A]">Cardholder Name</label>
                  <input
                    type="text"
                    defaultValue={shippingAddress.fullName}
                    className="w-full text-xs p-2.5 bg-[#FAF7F2] rounded-xl border border-[#D9C0AE]"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2 space-y-1">
                    <label className="text-[11px] font-bold text-[#5C4D4A]">Card Number</label>
                    <input
                      type="text"
                      placeholder="4532 •••• •••• 8912"
                      className="w-full text-xs p-2.5 bg-[#FAF7F2] rounded-xl border border-[#D9C0AE]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-[#5C4D4A]">CVV</label>
                    <input
                      type="password"
                      placeholder="•••"
                      maxLength={4}
                      className="w-full text-xs p-2.5 bg-[#FAF7F2] rounded-xl border border-[#D9C0AE]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* COD Notice */}
            {paymentMethod === 'cod' && (
              <div className="p-4 bg-[#F2E8DF] rounded-2xl border border-[#E0C9B7] text-xs text-[#5C4D4A] flex items-center gap-3">
                <Banknote className="w-6 h-6 text-[#B87B64] flex-shrink-0" />
                <p>
                  You will pay <strong>${getTotal().toFixed(2)}</strong> in cash or via mobile scanner upon parcel arrival at your address.
                </p>
              </div>
            )}

            <div className="flex items-center justify-between pt-4">
              <button
                type="button"
                onClick={() => setStep('parcel-note')}
                className="px-5 py-2.5 bg-white text-[#5C4D4A] hover:bg-[#F2E8DF] font-semibold text-xs rounded-full border border-[#D9C0AE] flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>

              <button
                type="button"
                onClick={handleFinalPay}
                className="px-8 py-4 bg-[#5C4D4A] hover:bg-[#4A3E3D] text-[#FAF7F2] font-bold text-sm rounded-full shadow-lg transition-all flex items-center gap-2"
                id="place-order-final-btn"
              >
                <span>Complete Order • ${getTotal().toFixed(2)}</span>
                <Sparkles className="w-4 h-4 text-[#E0A96D]" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: ORDER CONFIRMATION SCREEN */}
        {step === 'confirmation' && placedOrderDetails && (
          <div className="space-y-6 pt-6 text-center">
            <div className="w-20 h-20 bg-[#E8D3C5] rounded-full flex items-center justify-center text-[#5C4D4A] mx-auto text-3xl shadow-inner">
              🧶
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase font-bold text-[#4B6B46] tracking-widest block">
                Order Received & Queued for Crafting!
              </span>
              <h2 className="font-serif-crochet text-3xl font-bold text-[#3B2E2A]">
                Thank you, {placedOrderDetails.shippingAddress.fullName}!
              </h2>
              <p className="text-xs text-[#6E5D59] max-w-md mx-auto">
                Your order is safely recorded. We are preparing the organic yarn, crafting your items with care, and handwriting your custom parcel note!
              </p>
            </div>

            {/* Order Slip Info Box */}
            <div className="p-5 bg-white rounded-2xl border border-[#E8DDD3] text-left text-xs space-y-3">
              <div className="flex items-center justify-between border-b border-[#F4EBE1] pb-2">
                <div>
                  <span className="text-[#8C7670]">Order Tracking Number:</span>
                  <div className="flex items-center gap-2 font-mono font-bold text-sm text-[#3B2E2A]">
                    <span>{placedOrderDetails.orderId}</span>
                    <button
                      onClick={() => handleCopyOrderId(placedOrderDetails.orderId)}
                      className="text-[#B87B64] hover:underline text-[11px] flex items-center gap-1"
                    >
                      <Copy className="w-3 h-3" /> {copiedId ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[#8C7670]">Estimated Dispatch:</span>
                  <span className="font-bold text-[#4B6B46] block">{placedOrderDetails.estimatedDelivery}</span>
                </div>
              </div>

              {/* Items Summary */}
              <div className="space-y-2">
                <span className="font-bold text-[#5C4D4A]">Items in Parcel:</span>
                {placedOrderDetails.items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between text-xs">
                    <span>{item.quantity}x {item.product.name} ({item.selectedColor || 'Standard'})</span>
                    <span className="font-bold">${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              {/* Parcel Note Included */}
              <div className="p-3 bg-[#FAF2EA] rounded-xl border border-[#D9C0AE] italic font-serif-crochet text-xs text-[#4A3E3D]">
                💌 <strong>Included Gift Note:</strong> "{placedOrderDetails.globalParcelNote}"
              </div>

              <div className="pt-2 border-t border-[#F4EBE1] flex justify-between font-bold text-sm text-[#3B2E2A]">
                <span>Total Paid ({placedOrderDetails.paymentStatus})</span>
                <span className="text-[#B87B64] font-serif-crochet text-lg">${placedOrderDetails.total.toFixed(2)}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => window.print()}
                className="w-full sm:w-auto px-5 py-2.5 bg-white hover:bg-[#F2E8DF] text-[#5C4D4A] font-semibold text-xs rounded-full border border-[#D9C0AE] flex items-center justify-center gap-1.5"
              >
                <Printer className="w-4 h-4" /> Download / Print Order Slip
              </button>

              <a
                href="https://instagram.com/__crochetales__"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 bg-[#5C4D4A] hover:bg-[#4A3E3D] text-[#FAF7F2] font-semibold text-xs rounded-full flex items-center justify-center gap-1.5"
              >
                <Instagram className="w-4 h-4 text-[#C13584]" /> Follow Order Updates @__crochetales__
              </a>
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  setIsCheckoutOpen(false);
                  setStep('shipping');
                }}
                className="text-xs font-bold text-[#B87B64] underline hover:text-[#A36953]"
              >
                Back to Shop Collection
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
