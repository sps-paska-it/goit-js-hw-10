const e=(e,t)=>{new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)})).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))},t={form:document.querySelector(".form"),firstDelay:document.querySelector('input[name$="delay"]'),step:document.querySelector('input[name$="step"]'),amount:document.querySelector('input[name$="amount"]')};t.form.addEventListener("submit",(o=>{o.preventDefault();const n=Number(t.amount.value),l=Number(t.step.value);let m=Number(t.firstDelay.value);for(let t=1;t<=n;t++)e(t,m),m+=l}));
//# sourceMappingURL=03-promises.e979f1ca.js.map
