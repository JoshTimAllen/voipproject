import { c as create_ssr_component, v as validate_component, e as escape, a as subscribe, b as add_attribute, g as getContext, s as setContext, o as onDestroy, m as missing_component } from './ssr-_WzSIGFI.js';
import { w as writable } from './index2-cq3yyuG3.js';

const Hint = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let touched;
  let errors2;
  let hideWhenError;
  let requiredError;
  let value;
  let $formContext, $$unsubscribe_formContext;
  let { for: name = "" } = $$props;
  let { form = "svelte-use-form" } = $$props;
  let { class: _class = "" } = $$props;
  let { id = void 0 } = $$props;
  let { on = "" } = $$props;
  let { hideWhen = "" } = $$props;
  let { hideWhenRequired = false } = $$props;
  let { showWhenUntouched = false } = $$props;
  if (!name)
    name = getContext(`${form}_hint-group-name`);
  const formContext = getContext(form);
  $$unsubscribe_formContext = subscribe(formContext, (value2) => $formContext = value2);
  if ($$props.for === void 0 && $$bindings.for && name !== void 0)
    $$bindings.for(name);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
    $$bindings.class(_class);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.on === void 0 && $$bindings.on && on !== void 0)
    $$bindings.on(on);
  if ($$props.hideWhen === void 0 && $$bindings.hideWhen && hideWhen !== void 0)
    $$bindings.hideWhen(hideWhen);
  if ($$props.hideWhenRequired === void 0 && $$bindings.hideWhenRequired && hideWhenRequired !== void 0)
    $$bindings.hideWhenRequired(hideWhenRequired);
  if ($$props.showWhenUntouched === void 0 && $$bindings.showWhenUntouched && showWhenUntouched !== void 0)
    $$bindings.showWhenUntouched(showWhenUntouched);
  touched = $formContext[name]?.touched ?? {};
  errors2 = $formContext[name]?.errors ?? {};
  hideWhenError = hideWhen ? errors2[hideWhen] : "";
  requiredError = errors2["required"];
  value = errors2[on];
  $$unsubscribe_formContext();
  return `${!(hideWhenRequired && requiredError) && !hideWhenError ? `${(touched || showWhenUntouched) && value ? `<div${add_attribute("id", id, 0)} class="${"svelte-use-form-hint " + escape(_class, true)}">${slots.default ? slots.default({ value }) : ``}</div>` : ``}` : ``}`;
});
const HintGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form = "svelte-use-form" } = $$props;
  let { for: name = "" } = $$props;
  setContext(`${form}_hint-group-name`, name);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.for === void 0 && $$bindings.for && name !== void 0)
    $$bindings.for(name);
  return `${slots.default ? slots.default({ form }) : ``}`;
});
const isChrome = () => /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
const animationName = "svelte-use-form-webkit-autofill";
const css$2 = `
@keyframes ${animationName} {
    from {}
}

input:-webkit-autofill {
    animation-name: svelte-use-form-webkit-autofill;
}
`;
function startAnimationWhenAutofilled() {
  if (document.getElementById("svelte-use-form-chrome-autofill-styles") === null) {
    const style = document.createElement("style");
    style.setAttribute("id", "svelte-use-form-chrome-autofill-styles");
    style.setAttribute("type", "text/css");
    style.appendChild(document.createTextNode(css$2));
    document.head.appendChild(style);
  }
}
function handleChromeAutofill(textElement, control, callback) {
  if (!isChrome())
    return;
  function handleAnimationStart(event) {
    if (event.animationName.includes(animationName)) {
      const currentValue = textElement.value;
      if (!currentValue) {
        control.valid = true;
        callback();
      }
    }
  }
  textElement.addEventListener("animationstart", handleAnimationStart);
  startAnimationWhenAutofilled();
}
class FormControl {
  validators;
  /**
   * Returns an object containing possible validation errors
   * @example
   * (All validators are throwing an error)
   * `{ required: true, minLength: 4, maxLength: 20 }`
   * (Only required is invalid)
   * `{ required: true }`
   */
  errors = {};
  /**
   * Contains a map of values, that will be shown
   * in place of the original validation error.
   */
  errorMap = {};
  /**
   * The DOM elements representing this control
   */
  elements = [];
  /** Does the FormControl pass all given validators? */
  valid = true;
  /**
   * If the FormControl has been interacted with.
   * (triggered by blur event)
   */
  _touched = false;
  /** The initial value of the FormControl. Defaults to `""` if not set via `useForm(params)`. */
  initial;
  // TODO can we get the Form via Svelte context?
  formRef;
  _value = "";
  get value() {
    return this._value;
  }
  get touched() {
    return this._touched;
  }
  /**
   * This will only change the internal value of the control, not the one displayed in the actual HTML-Element
   *
   * See `change(value: String)` for doing both
   */
  set value(value) {
    this._value = value;
    this.validate();
  }
  set touched(value) {
    this._touched = value;
    this.elements.forEach((element) => {
      if (value)
        element.classList.add("touched");
      else
        element.classList.remove("touched");
    });
  }
  constructor(formControl) {
    this.formRef = formControl.formRef;
    this.validators = formControl.validators;
    this.errorMap = formControl.errorMap;
    this.initial = formControl.value;
    this.elements = formControl.elements;
    this.value = formControl.value;
  }
  /**
   * Set an error manually.
   *
   * The error will be removed after changes to the value or on validate()
   *
   * Used for setting an error that would be difficult to implement with a validator.
   * @example Backend Response returning Login failed
   * ``` typescript
   * function submit() {
   *    apiLogin($form.values).then(response => {})
   *    .catch(error => {
   *        if (error.status === 403) {
   *            $form.password.error({ login: "Password or username is incorrect" });
   *        }
   *    })
   * }
   * ```
   */
  error(errors2) {
    this.errors = { ...errors2, ...this.errors };
    this.valid = false;
    this.formRef()["_notifyListeners"]();
  }
  /** Change the value and the value of all HTML-Elements associated with this control */
  change(value) {
    this.value = value;
    this.elements.forEach((element) => element.value = value);
    this.formRef()["_notifyListeners"]();
  }
  /** Validate the FormControl by querying through the given validators. */
  validate() {
    let valid = true;
    this.errors = {};
    for (const validator of this.validators) {
      const errors2 = validator(this.value, this.formRef(), this);
      if (!errors2)
        continue;
      valid = false;
      for (const error of Object.entries(errors2)) {
        let [key, value] = error;
        const errorMapping = this.errorMap[key];
        if (errorMapping) {
          value = typeof errorMapping === "function" ? errorMapping(value) : errorMapping;
        }
        this.errors[key] = value;
      }
    }
    this.valid = valid;
    this.elements.forEach((element) => element.setCustomValidity(valid ? "" : "Field is invalid"));
    return valid;
  }
  /** Reset the form control value to its initial value or `{ value }` and untouch it */
  reset({ value } = {}) {
    const resetValue = value == null ? this.initial : value;
    this.elements.forEach((element) => element.value = resetValue);
    this.value = resetValue;
    this.touched = false;
    this.formRef()["_notifyListeners"]();
  }
}
class Form {
  /**
   * Function for creating a Form
   * @remarks This allows us to specify the index signatures in the class
   */
  static create(initialData, notifyListeners) {
    return new Form(initialData, notifyListeners);
  }
  _notifyListeners;
  get valid() {
    let valid = true;
    this.forEachControl((formControl) => {
      if (!formControl.valid)
        valid = false;
    });
    return valid;
  }
  get touched() {
    let touched = true;
    this.forEachControl((formControl) => {
      if (!formControl.touched)
        touched = false;
    });
    return touched;
  }
  get values() {
    let values = {};
    this.forEachControl((formControl, key) => {
      values[key] = formControl.value;
    });
    return values;
  }
  set touched(value) {
    this.forEachControl((formControl) => {
      formControl.touched = value;
    });
    this._notifyListeners();
  }
  constructor(initialData, notifyListeners) {
    for (const [k2, v] of Object.entries(initialData)) {
      this._addControl(k2, v.initial, v.validators, [], v.errorMap);
    }
    this._notifyListeners = notifyListeners;
  }
  /** Reset the whole form */
  reset() {
    this.forEachControl((formControl) => formControl.reset());
  }
  /** @internal Add a form conrol to the Form */
  _addControl(name, initial = "", validators = [], elements = [], errorMap = {}) {
    this[name] = new FormControl({
      value: initial,
      validators,
      elements,
      errorMap,
      formRef: () => this
    });
  }
  forEachControl(callback) {
    for (const [key, value] of Object.entries(this)) {
      if (value instanceof FormControl) {
        callback(value, key);
      }
    }
  }
}
class FormControlMissingError extends Error {
}
function isTextElement(node) {
  return node instanceof HTMLInputElement || node instanceof HTMLTextAreaElement;
}
function isFormControlElement(node) {
  return node instanceof HTMLInputElement || node instanceof HTMLTextAreaElement || node instanceof HTMLSelectElement;
}
function isIgnoredElement(node) {
  return node.hasAttribute("data-suf-ignore") && node.getAttribute("data-suf-ignore") === "true" || // <div data-suf-ignore="true">
  node.getAttribute("data-suf-ignore") === true;
}
const formReferences = writable([]);
function useForm(properties = {}, formName = "svelte-use-form") {
  const subscribers = [];
  let eventListeners = [];
  let state = Form.create(properties, notifyListeners);
  let observer;
  action.subscribe = subscribe2;
  action.set = set;
  setContext(formName, action);
  function action(node) {
    setupForm(node);
    formReferences.update((values) => [
      ...values,
      { node, form: state, notifyListeners }
    ]);
    return {
      update: () => {
      },
      destroy: () => {
        unmountEventListeners();
        observer.disconnect();
      }
    };
  }
  function setupForm(node) {
    const inputElements = [
      ...getNodeElementsByTagName(node, "input")
    ];
    const textareaElements = [
      ...getNodeElementsByTagName(node, "textarea")
    ];
    const selectElements = [
      ...getNodeElementsByTagName(node, "select")
    ];
    const textElements = [...inputElements, ...textareaElements];
    setupTextElements(textElements);
    setupSelectElements(selectElements);
    hideNotRepresentedFormControls([...textElements, ...selectElements]);
    setupFormObserver(node);
    notifyListeners();
  }
  function setupTextElements(textElements) {
    for (const textElement of textElements) {
      const name = textElement.name;
      let formControl = state[name];
      if (!formControl) {
        const initial = getInitialValueFromTextElement(textElement);
        state._addControl(name, initial, [], [textElement], {});
        formControl = state[name];
      } else {
        formControl.elements.push(textElement);
        if (textElement.type === "radio" && textElement instanceof HTMLInputElement && textElement.checked) {
          formControl.initial = textElement.value;
        }
      }
      switch (textElement.type) {
        case "checkbox":
        case "radio":
          mountEventListener(textElement, "click", handleBlurOrClick);
          break;
        default:
          setInitialValue(textElement, formControl);
          handleAutofill(textElement, formControl);
          mountEventListener(textElement, "blur", handleBlurOrClick);
      }
      mountEventListener(textElement, "input", handleInput);
    }
  }
  function setupSelectElements(selectElements) {
    for (const selectElement of selectElements) {
      const name = selectElement.name;
      const formControl = state[name];
      if (!formControl) {
        const initial = selectElement.value;
        state._addControl(name, initial, [], [selectElement], {});
      } else {
        formControl.elements.push(selectElement);
        setInitialValue(selectElement, formControl);
      }
      mountEventListener(selectElement, "input", handleInput);
      mountEventListener(selectElement, "input", handleBlurOrClick);
      mountEventListener(selectElement, "blur", handleBlurOrClick);
    }
  }
  function setupFormObserver(form) {
    observer = new MutationObserver(observeForm);
    observer.observe(form, { childList: true, subtree: true });
  }
  function observeForm(mutations) {
    for (const mutation of mutations) {
      if (mutation.type !== "childList")
        continue;
      for (const node of mutation.addedNodes) {
        if (!(isFormControlElement(node) && !isIgnoredElement(node)))
          continue;
        const initialFormControlProperty = properties[node.name];
        if (!state[node.name] && initialFormControlProperty) {
          state._addControl(
            node.name,
            initialFormControlProperty.initial,
            initialFormControlProperty.validators,
            [],
            // The setup function will add this node to the form control
            initialFormControlProperty.errorMap
          );
        }
        if (isTextElement(node))
          setupTextElements([node]);
        else if (node instanceof HTMLSelectElement)
          setupSelectElements([node]);
      }
      for (const node of mutation.removedNodes) {
        if (!(node instanceof HTMLElement))
          continue;
        const elements = isFormControlElement(node) ? [node] : getAllFormControlElements(node);
        elements.forEach((element) => {
          delete state[element.name];
          eventListeners = eventListeners.filter((eventListener) => eventListener.node !== element);
        });
      }
    }
    notifyListeners();
  }
  function mountEventListener(node, event, listener) {
    node.addEventListener(event, listener);
    eventListeners.push({ node, event, listener });
  }
  function unmountEventListeners() {
    for (const { node, event, listener } of eventListeners) {
      node.removeEventListener(event, listener);
    }
  }
  function handleAutofill(textElement, formControl) {
    handleChromeAutofill(textElement, formControl, notifyListeners);
    function handleNoEventAutofilling() {
      if (textElement.value !== formControl.initial) {
        handleBlurOrClick({ target: textElement });
        return true;
      }
      return false;
    }
    const autofillingWithoutEventInstantly = handleNoEventAutofilling();
    if (!autofillingWithoutEventInstantly)
      setTimeout(() => handleNoEventAutofilling(), 100);
  }
  function handleInput({ target: node }) {
    if (isFormControlElement(node)) {
      const name = node.name;
      const formControl = state[name];
      if (!formControl)
        throw new FormControlMissingError();
      let value;
      if (node.type === "checkbox" && node instanceof HTMLInputElement) {
        value = node.checked ? "checked" : "";
      } else {
        value = node.value;
      }
      formControl.value = value;
      notifyListeners();
    }
  }
  function handleBlurOrClick({ target: node }) {
    if (isFormControlElement(node)) {
      const formControl = state[node.name];
      if (!formControl)
        throw new FormControlMissingError();
      if (!formControl.touched)
        handleInput({ target: node });
      formControl.touched = true;
      node.classList.add("touched");
      notifyListeners();
    }
  }
  function hideNotRepresentedFormControls(nodes) {
    for (const key of Object.keys(properties)) {
      let isFormControlRepresentedInDom = false;
      for (const node of nodes) {
        if (key === node.name)
          isFormControlRepresentedInDom = true;
      }
      if (!isFormControlRepresentedInDom)
        delete state[key];
    }
  }
  function setInitialValue(element, formControl) {
    if (formControl.initial)
      element.value = formControl.initial;
  }
  function notifyListeners() {
    for (const callback of subscribers)
      callback(state);
  }
  function subscribe2(callback) {
    subscribers.push(callback);
    callback(state);
    return { unsubscribe: () => unsubscribe(callback) };
  }
  function unsubscribe(subscriber) {
    const index = subscribers.indexOf(subscriber);
    subscribers.splice(index, 1);
  }
  function set(value) {
    state = value;
    notifyListeners();
  }
  return action;
}
function getInitialValueFromTextElement(textElement) {
  let initial;
  if (textElement.type === "radio" && textElement instanceof HTMLInputElement) {
    initial = textElement.checked ? textElement.value : "";
  } else if (textElement.type === "checkbox" && textElement instanceof HTMLInputElement) {
    initial = textElement.checked ? "checked" : "";
  } else {
    initial = textElement.value;
  }
  return initial;
}
function getNodeElementsByTagName(node, tagName) {
  return Array.from(node.getElementsByTagName(tagName)).filter((element) => !isIgnoredElement(element));
}
function getAllFormControlElements(node) {
  const inputs = getNodeElementsByTagName(node, "input");
  const textareas = getNodeElementsByTagName(node, "textarea");
  const selects = getNodeElementsByTagName(node, "select");
  return [...inputs, ...textareas, ...selects];
}
const css$1 = {
  code: '.touched:invalid{border-color:red;outline-color:red}@import url("https://fonts.googleapis.com/css?family=Numans");.container.svelte-1kk6pld.svelte-1kk6pld{height:100%;align-content:center}.card.svelte-1kk6pld.svelte-1kk6pld{height:370px;margin-top:auto;margin-bottom:auto;width:400px;background-color:rgba(0, 0, 0, 0.5) !important}.social_icon.svelte-1kk6pld span.svelte-1kk6pld{font-size:60px;margin-left:10px;color:#ffc312}.social_icon.svelte-1kk6pld span.svelte-1kk6pld:hover{color:white;cursor:pointer}.card-header.svelte-1kk6pld h3.svelte-1kk6pld{color:white}.social_icon.svelte-1kk6pld.svelte-1kk6pld{position:absolute;right:20px;top:-45px}.input-group-prepend.svelte-1kk6pld span.svelte-1kk6pld{width:50px;background-color:#ffc312;color:black;border:0 !important}input.svelte-1kk6pld.svelte-1kk6pld:focus{outline:0 0 0 0 !important;box-shadow:0 0 0 0 !important}.remember.svelte-1kk6pld.svelte-1kk6pld{color:white}.remember.svelte-1kk6pld input.svelte-1kk6pld{width:20px;height:20px;margin-left:15px;margin-right:5px}.login_btn.svelte-1kk6pld.svelte-1kk6pld{color:black;background-color:#ffc312;width:100px}.login_btn.svelte-1kk6pld.svelte-1kk6pld:hover{color:black;background-color:white}.links.svelte-1kk6pld.svelte-1kk6pld{color:white}.links.svelte-1kk6pld a.svelte-1kk6pld{margin-left:4px}',
  map: null
};
const Loginform = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let { registerFormActive = false } = $$props;
  const form = useForm();
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  var username = "";
  var password = null;
  if ($$props.registerFormActive === void 0 && $$bindings.registerFormActive && registerFormActive !== void 0)
    $$bindings.registerFormActive(registerFormActive);
  $$result.css.add(css$1);
  $$unsubscribe_form();
  return `<pre data-svelte-h="svelte-1nuqo7a">  
  </pre> <div class="container svelte-1kk6pld"><div class="d-flex justify-content-center h-100"><div class="card svelte-1kk6pld"><div class="card-header svelte-1kk6pld" data-svelte-h="svelte-98fdt6"><h3 class="svelte-1kk6pld">Sign In</h3> <div class="d-flex justify-content-end social_icon svelte-1kk6pld"><span class="svelte-1kk6pld"><i class="fab fa-facebook-square"></i></span> <span class="svelte-1kk6pld"><i class="fab fa-google-plus-square"></i></span> <span class="svelte-1kk6pld"><i class="fab fa-twitter-square"></i></span></div></div> <div class="card-body"><form><div class="input-group form-group"><div class="input-group-prepend svelte-1kk6pld" data-svelte-h="svelte-1r3obpx"><span class="input-group-text svelte-1kk6pld"><i class="fas fa-user"></i></span></div> <input class="form-control svelte-1kk6pld" type="username" name="username"${add_attribute("value", username, 0)}></div> <div class="input-group form-group"><div class="input-group-prepend svelte-1kk6pld" data-svelte-h="svelte-1iqrg27"><span class="input-group-text svelte-1kk6pld"><i class="fas fa-key"></i></span></div> <input class="form-control svelte-1kk6pld" type="password" name="password"${add_attribute("value", password, 0)}> ${validate_component(Hint, "Hint").$$render($$result, { for: "password", on: "required" }, {}, {
    default: () => {
      return `This is a mandatory field`;
    }
  })}</div> <div class="row align-items-center remember svelte-1kk6pld" data-svelte-h="svelte-md7rpa"><input type="checkbox" class="svelte-1kk6pld">Remember Me</div> <div class="form-group"><input type="submit" value="Login" class="btn float-right login_btn svelte-1kk6pld" ${!$form.valid ? "disabled" : ""}></div></form></div> <div class="card-footer" data-svelte-h="svelte-qxbj9r"><div class="d-flex justify-content-center links svelte-1kk6pld">Don&#39;t have an account?<a href="#register" class="svelte-1kk6pld">Register</a></div> <div class="d-flex justify-content-center"><a href="#">Forgot your password?</a></div></div></div></div> </div>`;
});
var rr = Object.create;
var E = Object.defineProperty;
var er = Object.getOwnPropertyDescriptor;
var tr = Object.getOwnPropertyNames;
var nr = Object.getPrototypeOf, ar = Object.prototype.hasOwnProperty;
var F = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
var cr = (r, e, t, n) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let a of tr(e))
      !ar.call(r, a) && a !== t && E(r, a, { get: () => e[a], enumerable: !(n = er(e, a)) || n.enumerable });
  return r;
};
var ir = (r, e, t) => (t = r != null ? rr(nr(r)) : {}, cr(e || !r || !r.__esModule ? E(t, "default", { value: r, enumerable: true }) : t, r));
var k = F((vr, A) => {
  A.exports = (r) => encodeURIComponent(r).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`);
});
var U = F((br, R) => {
  var $ = "%[a-f0-9]{2}", C = new RegExp($, "gi"), N = new RegExp("(" + $ + ")+", "gi");
  function x(r, e) {
    try {
      return decodeURIComponent(r.join(""));
    } catch {
    }
    if (r.length === 1)
      return r;
    e = e || 1;
    var t = r.slice(0, e), n = r.slice(e);
    return Array.prototype.concat.call([], x(t), x(n));
  }
  function sr(r) {
    try {
      return decodeURIComponent(r);
    } catch {
      for (var e = r.match(C), t = 1; t < e.length; t++)
        r = x(e, t).join(""), e = r.match(C);
      return r;
    }
  }
  function fr(r) {
    for (var e = { "%FE%FF": "��", "%FF%FE": "��" }, t = N.exec(r); t; ) {
      try {
        e[t[0]] = decodeURIComponent(t[0]);
      } catch {
        var n = sr(t[0]);
        n !== t[0] && (e[t[0]] = n);
      }
      t = N.exec(r);
    }
    e["%C2"] = "�";
    for (var a = Object.keys(e), i = 0; i < a.length; i++) {
      var c = a[i];
      r = r.replace(new RegExp(c, "g"), e[c]);
    }
    return r;
  }
  R.exports = function(r) {
    if (typeof r != "string")
      throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof r + "`");
    try {
      return r = r.replace(/\+/g, " "), decodeURIComponent(r);
    } catch {
      return fr(r);
    }
  };
});
var T = F((jr, q) => {
  q.exports = (r, e) => {
    if (!(typeof r == "string" && typeof e == "string"))
      throw new TypeError("Expected the arguments to be of type `string`");
    if (e === "")
      return [r];
    let t = r.indexOf(e);
    return t === -1 ? [r] : [r.slice(0, t), r.slice(t + e.length)];
  };
});
var I = F((Sr, D) => {
  D.exports = function(r, e) {
    for (var t = {}, n = Object.keys(r), a = Array.isArray(e), i = 0; i < n.length; i++) {
      var c = n[i], s = r[c];
      (a ? e.indexOf(c) !== -1 : e(c, s, r)) && (t[c] = s);
    }
    return t;
  };
});
var Q = F((o) => {
  var ur = k(), lr = U(), B = T(), or = I(), dr = (r) => r == null;
  function hr(r) {
    switch (r.arrayFormat) {
      case "index":
        return (e) => (t, n) => {
          let a = t.length;
          return n === void 0 || r.skipNull && n === null || r.skipEmptyString && n === "" ? t : n === null ? [...t, [l(e, r), "[", a, "]"].join("")] : [...t, [l(e, r), "[", l(a, r), "]=", l(n, r)].join("")];
        };
      case "bracket":
        return (e) => (t, n) => n === void 0 || r.skipNull && n === null || r.skipEmptyString && n === "" ? t : n === null ? [...t, [l(e, r), "[]"].join("")] : [...t, [l(e, r), "[]=", l(n, r)].join("")];
      case "comma":
      case "separator":
        return (e) => (t, n) => n == null || n.length === 0 ? t : t.length === 0 ? [[l(e, r), "=", l(n, r)].join("")] : [[t, l(n, r)].join(r.arrayFormatSeparator)];
      default:
        return (e) => (t, n) => n === void 0 || r.skipNull && n === null || r.skipEmptyString && n === "" ? t : n === null ? [...t, l(e, r)] : [...t, [l(e, r), "=", l(n, r)].join("")];
    }
  }
  function gr(r) {
    let e;
    switch (r.arrayFormat) {
      case "index":
        return (t, n, a) => {
          if (e = /\[(\d*)\]$/.exec(t), t = t.replace(/\[\d*\]$/, ""), !e) {
            a[t] = n;
            return;
          }
          a[t] === void 0 && (a[t] = {}), a[t][e[1]] = n;
        };
      case "bracket":
        return (t, n, a) => {
          if (e = /(\[\])$/.exec(t), t = t.replace(/\[\]$/, ""), !e) {
            a[t] = n;
            return;
          }
          if (a[t] === void 0) {
            a[t] = [n];
            return;
          }
          a[t] = [].concat(a[t], n);
        };
      case "comma":
      case "separator":
        return (t, n, a) => {
          let i = typeof n == "string" && n.includes(r.arrayFormatSeparator), c = typeof n == "string" && !i && g(n, r).includes(r.arrayFormatSeparator);
          n = c ? g(n, r) : n;
          let s = i || c ? n.split(r.arrayFormatSeparator).map((f) => g(f, r)) : n === null ? n : g(n, r);
          a[t] = s;
        };
      default:
        return (t, n, a) => {
          if (a[t] === void 0) {
            a[t] = n;
            return;
          }
          a[t] = [].concat(a[t], n);
        };
    }
  }
  function L(r) {
    if (typeof r != "string" || r.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function l(r, e) {
    return e.encode ? e.strict ? ur(r) : encodeURIComponent(r) : r;
  }
  function g(r, e) {
    return e.decode ? lr(r) : r;
  }
  function H(r) {
    return Array.isArray(r) ? r.sort() : typeof r == "object" ? H(Object.keys(r)).sort((e, t) => Number(e) - Number(t)).map((e) => r[e]) : r;
  }
  function J(r) {
    let e = r.indexOf("#");
    return e !== -1 && (r = r.slice(0, e)), r;
  }
  function yr(r) {
    let e = "", t = r.indexOf("#");
    return t !== -1 && (e = r.slice(t)), e;
  }
  function P(r) {
    r = J(r);
    let e = r.indexOf("?");
    return e === -1 ? "" : r.slice(e + 1);
  }
  function M(r, e) {
    return e.parseNumbers && !Number.isNaN(Number(r)) && typeof r == "string" && r.trim() !== "" ? r = Number(r) : e.parseBooleans && r !== null && (r.toLowerCase() === "true" || r.toLowerCase() === "false") && (r = r.toLowerCase() === "true"), r;
  }
  function V(r, e) {
    e = Object.assign({ decode: true, sort: true, arrayFormat: "none", arrayFormatSeparator: ",", parseNumbers: false, parseBooleans: false }, e), L(e.arrayFormatSeparator);
    let t = gr(e), n = /* @__PURE__ */ Object.create(null);
    if (typeof r != "string" || (r = r.trim().replace(/^[?#&]/, ""), !r))
      return n;
    for (let a of r.split("&")) {
      if (a === "")
        continue;
      let [i, c] = B(e.decode ? a.replace(/\+/g, " ") : a, "=");
      c = c === void 0 ? null : ["comma", "separator"].includes(e.arrayFormat) ? c : g(c, e), t(g(i, e), c, n);
    }
    for (let a of Object.keys(n)) {
      let i = n[a];
      if (typeof i == "object" && i !== null)
        for (let c of Object.keys(i))
          i[c] = M(i[c], e);
      else
        n[a] = M(i, e);
    }
    return e.sort === false ? n : (e.sort === true ? Object.keys(n).sort() : Object.keys(n).sort(e.sort)).reduce((a, i) => {
      let c = n[i];
      return Boolean(c) && typeof c == "object" && !Array.isArray(c) ? a[i] = H(c) : a[i] = c, a;
    }, /* @__PURE__ */ Object.create(null));
  }
  o.extract = P;
  o.parse = V;
  o.stringify = (r, e) => {
    if (!r)
      return "";
    e = Object.assign({ encode: true, strict: true, arrayFormat: "none", arrayFormatSeparator: "," }, e), L(e.arrayFormatSeparator);
    let t = (c) => e.skipNull && dr(r[c]) || e.skipEmptyString && r[c] === "", n = hr(e), a = {};
    for (let c of Object.keys(r))
      t(c) || (a[c] = r[c]);
    let i = Object.keys(a);
    return e.sort !== false && i.sort(e.sort), i.map((c) => {
      let s = r[c];
      return s === void 0 ? "" : s === null ? l(c, e) : Array.isArray(s) ? s.reduce(n(c), []).join("&") : l(c, e) + "=" + l(s, e);
    }).filter((c) => c.length > 0).join("&");
  };
  o.parseUrl = (r, e) => {
    e = Object.assign({ decode: true }, e);
    let [t, n] = B(r, "#");
    return Object.assign({ url: t.split("?")[0] || "", query: V(P(r), e) }, e && e.parseFragmentIdentifier && n ? { fragmentIdentifier: g(n, e) } : {});
  };
  o.stringifyUrl = (r, e) => {
    e = Object.assign({ encode: true, strict: true }, e);
    let t = J(r.url).split("?")[0] || "", n = o.extract(r.url), a = o.parse(n, { sort: false }), i = Object.assign(a, r.query), c = o.stringify(i, e);
    c && (c = `?${c}`);
    let s = yr(r.url);
    return r.fragmentIdentifier && (s = `#${l(r.fragmentIdentifier, e)}`), `${t}${c}${s}`;
  };
  o.pick = (r, e, t) => {
    t = Object.assign({ parseFragmentIdentifier: true }, t);
    let { url: n, query: a, fragmentIdentifier: i } = o.parseUrl(r, t);
    return o.stringifyUrl({ url: n, query: or(a, e), fragmentIdentifier: i }, t);
  };
  o.exclude = (r, e, t) => {
    let n = Array.isArray(e) ? (a) => !e.includes(a) : (a, i) => !e(a, i);
    return o.pick(r, n, t);
  };
});
var X = ir(Q());
var w = function(r) {
  function e(t, n) {
    var a = "Unreachable '" + (t !== "/" ? t.replace(/\/$/, "") : t) + "', segment '" + n + "' is not defined";
    r.call(this, a), this.message = a, this.route = t, this.path = n;
  }
  return r && (e.__proto__ = r), e.prototype = Object.create(r && r.prototype), e.prototype.constructor = e, e;
}(Error);
function G(r, e) {
  var t, n, a = -100, i = [];
  t = r.replace(/[-$.]/g, "\\$&").replace(/\(/g, "(?:").replace(/\)/g, ")?").replace(/([:*]\w+)(?:<([^<>]+?)>)?/g, function(f, d, u) {
    return i.push(d.substr(1)), d.charAt() === ":" ? (a += 100, "((?!#)" + (u || "[^#/]+?") + ")") : (n = true, a += 500, "((?!#)" + (u || "[^#]+?") + ")");
  });
  try {
    t = new RegExp("^" + t + "$");
  } catch {
    throw new TypeError("Invalid route expression, given '" + e + "'");
  }
  var c = r.includes("#") ? 0.5 : 1, s = r.length * a * c;
  return { keys: i, regex: t, _depth: s, _isSplat: n };
}
var m = function(e, t) {
  var n = G(e, t), a = n.keys, i = n.regex, c = n._depth, s = n._isSplat;
  function f(d) {
    var u = d.match(i);
    if (u)
      return a.reduce(function(y, O, j) {
        return y[O] = typeof u[j + 1] == "string" ? decodeURIComponent(u[j + 1]) : null, y;
      }, {});
  }
  return f.regex = i, f.keys = a, { _isSplat: s, _depth: c, match: f };
};
m.push = function(e, t, n, a) {
  var i = t[e] || (t[e] = {});
  return i.pattern || (i.pattern = new m(e, a), i.route = (n || "").replace(/\/$/, "") || "/"), t.keys = t.keys || [], t.keys.includes(e) || (t.keys.push(e), m.sort(t)), i;
};
m.sort = function(e) {
  e.keys.sort(function(t, n) {
    return e[t].pattern._depth - e[n].pattern._depth;
  });
};
function K(r, e) {
  return "" + (e && e !== "/" ? e : "") + (r || "");
}
function b(r, e) {
  var t = r.match(/<[^<>]*\/[^<>]*>/);
  if (t)
    throw new TypeError("RegExp cannot contain slashes, given '" + t + "'");
  var n = r.split(/(?=\/|#)/), a = [];
  n[0] !== "/" && n.unshift("/"), n.some(function(i, c) {
    var s = a.slice(1).concat(i).join("") || null, f = n.slice(c + 1).join("") || null, d = e(i, s, f ? "" + (i !== "/" ? i : "") + f : null);
    return a.push(i), d;
  });
}
function mr(r, e) {
  var t = e.refs, n = {}, a = [], i;
  return b(r, function(c, s, f) {
    if (!e.keys)
      throw new w(r, c);
    var d;
    if (e.keys.some(function(u) {
      var y = e[u].pattern, O = y.match;
      y._length;
      var p = y._isSplat, _ = O(p && f || c);
      if (_) {
        var Y = (t[e[u].route] || []).concat(t[e[u].route + "/"] || []).concat(t[e[u].route + "#"] || []);
        return Object.assign(n, _), Y.forEach(function(v) {
          if (!a.some(function(Z) {
            return Z.key === v;
          })) {
            var h = Object.assign({}, t[v]), S = false;
            h.exact ? S = f === null : S = !(c && s === null) || c === s || p || !f, h.matches = S, h.params = Object.assign({}, n), h.route = h.fullpath, h.depth += O.keys.length, h.path = p && f || s || c, delete h.fullpath, a.push(h);
          }
        }), f === null && !e[u].keys ? true : !p && !f && e.keys.some(function(v) {
          return v.includes("*");
        }) ? false : (i = p, e = e[u], d = true, true);
      }
      return false;
    }), !(d || e.keys.some(function(u) {
      return e[u].pattern.match(c);
    })))
      throw new w(r, c);
    return i || !d;
  }), a.sort(function(c, s) {
    return s.fallback && !c.fallback ? -1 : c.fallback && !s.fallback ? 1 : s.route.includes("#") && !c.route.includes("#") ? -1 : c.route.includes("#") && !s.route.includes("#") ? 1 : c.depth - s.depth;
  });
}
function z(r, e, t) {
  for (var n = mr.bind(null, r, e), a = []; t > 0; ) {
    t -= 1;
    try {
      return n(a);
    } catch (i) {
      if (t > 0)
        return n(a);
      throw i;
    }
  }
}
function pr(r, e, t, n) {
  var a = K(r, t), i = a.split(/(?=[#:/*.]\w)/g).length, c = Object.assign({}, n, { fullpath: a, depth: i });
  if (!r || !"#/".includes(r.charAt()))
    throw new TypeError("Routes should have a valid path, given " + JSON.stringify(r));
  if (!c.key)
    throw new TypeError("Routes should have a key, given " + JSON.stringify(c));
  e.refs[c.key] = c, e.refs[a] = e.refs[a] ? e.refs[a].concat(c.key) : [c.key];
  var s = e;
  return b(a, function(f, d) {
    s = m.push(f, s, d, a);
  }), a;
}
function Fr(r, e, t) {
  var n = K(r, t), a = e, i = null, c = null;
  if (b(n, function(f) {
    if (!a)
      return i = null, true;
    if (!a.keys)
      throw new w(r, f);
    c = f, i = a, a = a[c];
  }), !(i && c))
    throw new w(r, c);
  if (i === e && (i = e["/"]), i.route !== c) {
    var s = i.keys.indexOf(c);
    if (s === -1)
      throw new w(r, c);
    i.keys.splice(s, 1), m.sort(i), delete i[c];
  }
  i.route === a.route && delete e.refs[n];
}
var W = function() {
  var e = { refs: {} }, t = [];
  return { routes: e, resolve: function(n, a) {
    var i = n.split("?")[0], c = [];
    b(i, function(s, f, d) {
      try {
        a(null, z(f, e, 2).filter(function(u) {
          return c.includes(u.route) ? false : (c.push(u.route), true);
        }), f);
      } catch (u) {
        a(u, []);
      }
    });
  }, mount: function(n, a) {
    n !== "/" && t.push(n), a(), t.pop();
  }, find: function(n, a) {
    return z(n, e, a === true ? 2 : a || 1);
  }, add: function(n, a) {
    return pr(n, e, t.join(""), a);
  }, rm: function(n) {
    return Fr(n, e, t.join(""));
  } };
};
W.matches = function(e, t) {
  return G(e, t).regex.test(t);
};
var wr = W;
var export_parse = X.parse;
var export_stringify = X.stringify;
const cache = {};
const baseTag = document.getElementsByTagName("base");
const basePrefix = baseTag[0] && baseTag[0].href || "/";
const ROOT_URL = basePrefix.replace(window.location.origin, "");
const router = writable({
  path: "/",
  query: {},
  params: {},
  initial: true
});
const CTX_ROUTER = {};
const CTX_ROUTE = {};
let HASHCHANGE = window.location.origin === "null";
function hashchangeEnable(value) {
  if (typeof value === "boolean") {
    HASHCHANGE = !!value;
  }
  return HASHCHANGE;
}
Object.defineProperty(router, "hashchange", {
  set: (value) => hashchangeEnable(value),
  get: () => hashchangeEnable(),
  configurable: false,
  enumerable: false
});
function fixedLocation(path, callback, doFinally) {
  const baseUri = router.hashchange ? window.location.hash.replace("#", "") : window.location.pathname;
  if (path.charAt() !== "/") {
    path = baseUri + path;
  }
  const currentURL2 = baseUri + window.location.hash + window.location.search;
  if (currentURL2 !== path) {
    callback(path);
  }
  if (typeof doFinally === "function") {
    doFinally();
  }
}
function cleanPath(uri, fix) {
  return uri !== "/" || fix ? uri.replace(/\/$/, "") : uri;
}
function navigateTo(path, options) {
  const {
    reload,
    replace,
    params,
    queryParams
  } = options || {};
  if (!path || typeof path !== "string" || path[0] !== "/" && path[0] !== "#") {
    throw new Error(`Expecting '/${path}' or '#${path}', given '${path}'`);
  }
  if (params) {
    path = path.replace(/:([a-zA-Z][a-zA-Z0-9_-]*)/g, (_, key) => params[key]);
  }
  if (queryParams) {
    const qs = export_stringify(queryParams);
    if (qs) {
      path += `?${qs}`;
    }
  }
  if (router.hashchange) {
    let fixedURL = path.replace(/^#|#$/g, "");
    if (ROOT_URL !== "/") {
      fixedURL = fixedURL.replace(cleanPath(ROOT_URL), "");
    }
    window.location.hash = fixedURL !== "/" ? fixedURL : "";
    return;
  }
  if (reload || !window.history.pushState || !window.dispatchEvent) {
    window.location.href = path;
    return;
  }
  fixedLocation(path, (nextURL) => {
    window.history[replace ? "replaceState" : "pushState"](null, "", nextURL);
    window.dispatchEvent(new Event("popstate"));
  });
}
function getProps(given, required) {
  const { props: sub, ...others } = given;
  required.forEach((k2) => {
    delete others[k2];
  });
  return {
    ...sub,
    ...others
  };
}
function isActive(uri, path, exact) {
  if (!cache[[uri, path, exact]]) {
    if (exact !== true && path.indexOf(uri) === 0) {
      cache[[uri, path, exact]] = /^[#/?]?$/.test(path.substr(uri.length, 1));
    } else if (uri.includes("*") || uri.includes(":")) {
      cache[[uri, path, exact]] = wr.matches(uri, path);
    } else {
      cache[[uri, path, exact]] = cleanPath(path) === uri;
    }
  }
  return cache[[uri, path, exact]];
}
function isPromise(object) {
  return object && typeof object.then === "function";
}
function isSvelteComponent(object) {
  return object && object.prototype;
}
const baseRouter = new wr();
const routeInfo = writable({});
const onError = {};
const shared = {};
let errors = [];
let interval;
let currentURL;
router.subscribe((value) => {
  shared.router = value;
});
routeInfo.subscribe((value) => {
  shared.routeInfo = value;
});
function doFallback(failure, fallback) {
  routeInfo.update((defaults) => ({
    ...defaults,
    [fallback]: {
      ...shared.router,
      failure
    }
  }));
}
function handleRoutes(map, params, enforce) {
  map.some((x) => {
    if (x.key && (enforce || x.matches && !shared.routeInfo[x.key])) {
      if (x.redirect && (x.condition === null || x.condition(shared.router) !== true)) {
        if (x.exact && shared.router.path !== x.path)
          return false;
        navigateTo(x.redirect);
        return true;
      }
      if (x.exact && x.path !== currentURL) {
        if (currentURL.replace(/[#/]$/, "") !== x.path)
          return false;
      }
      if (enforce && x.fallback) {
        return false;
      }
      Object.assign(params, x.params);
      routeInfo.update((defaults) => ({
        ...defaults,
        [x.key]: {
          ...shared.router,
          ...x
        }
      }));
    }
    return false;
  });
}
function evtHandler() {
  let baseUri = !router.hashchange ? window.location.href.replace(window.location.origin, "") : window.location.hash || "/";
  let failure;
  if (ROOT_URL !== "/") {
    baseUri = baseUri.replace(cleanPath(ROOT_URL), "");
  }
  if (/^#[\w-]+$/.test(window.location.hash) && document.querySelector(window.location.hash) && currentURL === baseUri.split("#")[0])
    return;
  const normalizedURL = baseUri.replace("/#", "#").replace(/^#\//, "/");
  const [path, qs] = normalizedURL.split("?");
  const fullpath = path.replace(/\/?$/, "/");
  const params = {};
  if (currentURL !== normalizedURL) {
    currentURL = normalizedURL;
    router.set({
      path: cleanPath(fullpath),
      query: export_parse(qs),
      params
    });
  }
  routeInfo.set({});
  baseRouter.resolve(fullpath, (err, result) => {
    if (err) {
      failure = err;
      return;
    }
    handleRoutes(result, params);
  });
  if (!failure) {
    try {
      handleRoutes(baseRouter.find(fullpath), params, true);
    } catch (e) {
    }
  }
  if (failure && failure.path !== "/") {
    console.debug(failure);
  } else {
    failure = null;
  }
  errors.forEach((cb) => cb());
  errors = [];
  let fallback;
  Object.keys(onError).forEach((root) => {
    if (isActive(root, fullpath, false)) {
      const fn = onError[root].callback;
      fn(failure);
      errors.push(fn);
    }
    if (!fallback && onError[root].fallback) {
      fallback = onError[root].fallback;
    }
  });
  if (failure && fallback) {
    doFallback(failure, fallback);
  }
}
function findRoutes() {
  clearTimeout(interval);
  interval = setTimeout(evtHandler);
}
function unassignRoute(route) {
  try {
    baseRouter.rm(route);
  } catch (e) {
  }
  findRoutes();
}
const Router = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $router, $$unsubscribe_router;
  let $basePath, $$unsubscribe_basePath;
  $$unsubscribe_router = subscribe(router, (value) => $router = value);
  let fallback;
  let { key = "" } = $$props;
  let { path = "/" } = $$props;
  let { pending = null } = $$props;
  let { disabled = false } = $$props;
  let { condition = null } = $$props;
  const routerContext = getContext(CTX_ROUTER);
  const basePath = routerContext ? routerContext.basePath : writable(path);
  $$unsubscribe_basePath = subscribe(basePath, (value) => $basePath = value);
  const fixedRoot = $basePath !== path && $basePath !== "/" ? `${$basePath}${path !== "/" ? path : ""}` : path;
  function assignRoute(_key, route, detail) {
    _key = _key || `route-${Math.random().toString(36).substr(2)}`;
    const $key = [key, _key].filter(Boolean).join(".");
    const handler = { key: $key, ...detail };
    let fullpath;
    baseRouter.mount(fixedRoot, () => {
      fullpath = baseRouter.add(route, handler);
      fallback = handler.fallback && $key || fallback;
    });
    findRoutes();
    return [$key, fullpath];
  }
  onDestroy(() => {
  });
  setContext(CTX_ROUTER, {
    basePath,
    assignRoute,
    unassignRoute,
    pendingComponent: pending
  });
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.pending === void 0 && $$bindings.pending && pending !== void 0)
    $$bindings.pending(pending);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.condition === void 0 && $$bindings.condition && condition !== void 0)
    $$bindings.condition(condition);
  {
    if (condition) {
      disabled = !condition($router);
    }
  }
  $$unsubscribe_router();
  $$unsubscribe_basePath();
  return `${!disabled ? `${slots.default ? slots.default({ router: $router }) : ``}` : ``}`;
});
const Route = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $router, $$unsubscribe_router;
  let $routeInfo, $$unsubscribe_routeInfo;
  let $routePath, $$unsubscribe_routePath;
  $$unsubscribe_router = subscribe(router, (value) => $router = value);
  $$unsubscribe_routeInfo = subscribe(routeInfo, (value) => $routeInfo = value);
  let { key = null } = $$props;
  let { path = "/" } = $$props;
  let { exact = null } = $$props;
  let { pending = null } = $$props;
  let { disabled = false } = $$props;
  let { fallback = null } = $$props;
  let { component = null } = $$props;
  let { condition = null } = $$props;
  let { redirect = null } = $$props;
  const thisProps = [
    "key",
    "path",
    "exact",
    "pending",
    "disabled",
    "fallback",
    "component",
    "condition",
    "redirect"
  ];
  const routeContext = getContext(CTX_ROUTE);
  const routerContext = getContext(CTX_ROUTER);
  const { assignRoute, unassignRoute: unassignRoute2, pendingComponent } = routerContext || {};
  const routePath = routeContext ? routeContext.routePath : writable(path);
  $$unsubscribe_routePath = subscribe(routePath, (value) => $routePath = value);
  let activeRouter = null;
  let activeProps = {};
  let fullpath;
  let hasLoaded;
  const fixedRoot = $routePath !== path && $routePath !== "/" ? `${$routePath}${path !== "/" ? path : ""}` : path;
  function resolve() {
    const fixedRoute = path !== fixedRoot && fixedRoot.substr(-1) !== "/" ? `${fixedRoot}/` : fixedRoot;
    [key, fullpath] = assignRoute(key, fixedRoute, { condition, redirect, fallback, exact });
  }
  resolve();
  onDestroy(() => {
    if (unassignRoute2) {
      unassignRoute2(fullpath);
    }
  });
  setContext(CTX_ROUTE, { routePath });
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.exact === void 0 && $$bindings.exact && exact !== void 0)
    $$bindings.exact(exact);
  if ($$props.pending === void 0 && $$bindings.pending && pending !== void 0)
    $$bindings.pending(pending);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.fallback === void 0 && $$bindings.fallback && fallback !== void 0)
    $$bindings.fallback(fallback);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.condition === void 0 && $$bindings.condition && condition !== void 0)
    $$bindings.condition(condition);
  if ($$props.redirect === void 0 && $$bindings.redirect && redirect !== void 0)
    $$bindings.redirect(redirect);
  {
    if (key) {
      activeRouter = !disabled && $routeInfo[key];
      activeProps = getProps($$props, thisProps);
      activeProps.router = activeRouter;
    }
  }
  {
    if (activeRouter) {
      for (const k2 in $router.params) {
        if (typeof activeRouter.params[k2] === "undefined") {
          activeRouter.params[k2] = $router.params[k2];
        }
      }
      if (!component) {
        hasLoaded = true;
      } else if (isSvelteComponent(component)) {
        hasLoaded = true;
      } else if (isPromise(component)) {
        component.then((module) => {
          component = module.default;
          hasLoaded = true;
        });
      } else {
        component().then((module) => {
          component = module.default;
          hasLoaded = true;
        });
      }
    }
  }
  $$unsubscribe_router();
  $$unsubscribe_routeInfo();
  $$unsubscribe_routePath();
  return `${activeRouter ? ` ${!hasLoaded ? `${pending || pendingComponent ? `${isSvelteComponent(pending) ? `${validate_component(pending || missing_component, "svelte:component").$$render($$result, Object.assign({}, activeProps), {}, {})}` : `${isSvelteComponent(pendingComponent) ? `${validate_component(pendingComponent || missing_component, "svelte:component").$$render($$result, Object.assign({}, activeProps), {}, {})}` : `${escape(pending || pendingComponent)}`}`}` : ``}` : `${component ? `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object.assign({}, activeProps), {}, {})}` : `${slots.default ? slots.default({ ...activeProps }) : ``}`}`} ` : ``}`;
});
const css = {
  code: '.touched:invalid{border-color:red;outline-color:red}@import url("https://fonts.googleapis.com/css?family=Numans");.container.svelte-1il5301.svelte-1il5301{height:100%;align-content:center}.card.svelte-1il5301.svelte-1il5301{height:370px;margin-top:auto;margin-bottom:auto;width:400px;background-color:rgba(0, 0, 0, 0.5) !important}.card-header.svelte-1il5301 h3.svelte-1il5301{color:white}.social_icon.svelte-1il5301.svelte-1il5301{position:absolute;right:20px;top:-45px}.input-group-prepend.svelte-1il5301 span.svelte-1il5301{width:50px;background-color:#ffc312;color:black;border:0 !important}input.svelte-1il5301.svelte-1il5301:focus{outline:0 0 0 0 !important;box-shadow:0 0 0 0 !important}.remember.svelte-1il5301.svelte-1il5301{color:white}.remember.svelte-1il5301 input.svelte-1il5301{width:20px;height:20px;margin-left:15px;margin-right:5px}.login_btn.svelte-1il5301.svelte-1il5301{color:black;background-color:#ffc312;width:100px}.login_btn.svelte-1il5301.svelte-1il5301:hover{color:black;background-color:white}.links.svelte-1il5301.svelte-1il5301{color:white}.links.svelte-1il5301 a.svelte-1il5301{margin-left:4px}',
  map: null
};
const Registerform = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let { registerFormActive = false } = $$props;
  const form = useForm();
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  var username = "";
  var emailAddress = "";
  var password = null;
  if ($$props.registerFormActive === void 0 && $$bindings.registerFormActive && registerFormActive !== void 0)
    $$bindings.registerFormActive(registerFormActive);
  $$result.css.add(css);
  $$unsubscribe_form();
  return `<pre data-svelte-h="svelte-1nuqo7a">  
  </pre> <div class="container svelte-1il5301"><div class="d-flex justify-content-center h-100"><div class="card svelte-1il5301"><div class="card-header svelte-1il5301" data-svelte-h="svelte-k6cdcm"><h3 class="svelte-1il5301">Resister</h3> <div class="d-flex justify-content-end social_icon svelte-1il5301"></div></div> <div class="card-body"><form><div class="input-group form-group"><div class="input-group-prepend svelte-1il5301" data-svelte-h="svelte-1r3obpx"><span class="input-group-text svelte-1il5301"><i class="fas fa-user"></i></span></div> <input class="form-control svelte-1il5301" type="username" name="username"${add_attribute("value", username, 0)}></div> <div class="input-group form-group"><div class="input-group-prepend svelte-1il5301" data-svelte-h="svelte-1r3obpx"><span class="input-group-text svelte-1il5301"><i class="fas fa-user"></i></span></div> <input class="form-control svelte-1il5301" type="email" name="email"${add_attribute("value", emailAddress, 0)}></div> ${validate_component(HintGroup, "HintGroup").$$render($$result, { for: "email" }, {}, {
    default: () => {
      return `${validate_component(Hint, "Hint").$$render($$result, { on: "required" }, {}, {
        default: () => {
          return `This is a mandatory field`;
        }
      })} ${validate_component(Hint, "Hint").$$render($$result, { on: "email", hideWhenRequired: true }, {}, {
        default: () => {
          return `Email is not valid`;
        }
      })}`;
    }
  })} <div class="input-group form-group"><div class="input-group-prepend svelte-1il5301" data-svelte-h="svelte-1iqrg27"><span class="input-group-text svelte-1il5301"><i class="fas fa-key"></i></span></div> <input class="form-control svelte-1il5301" type="password" name="password"${add_attribute("value", password, 0)}> ${validate_component(Hint, "Hint").$$render($$result, { for: "password", on: "required" }, {}, {
    default: () => {
      return `This is a mandatory field`;
    }
  })}</div> <div class="row align-items-center remember svelte-1il5301" data-svelte-h="svelte-md7rpa"><input type="checkbox" class="svelte-1il5301">Remember Me</div> <div class="form-group"><input type="submit" value="Login" class="btn float-right login_btn svelte-1il5301" ${!$form.valid ? "disabled" : ""}></div></form></div> <div class="card-footer" data-svelte-h="svelte-t6vn70"><div class="d-flex justify-content-center links svelte-1il5301">Already have an account?<a href="#login" class="svelte-1il5301">Login</a></div> </div></div></div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const ssr = false;
  let { data } = $$props;
  if (window.location.hash != "#login" && window.location.hash != "#register") {
    window.location.hash = "login";
  }
  if ($$props.ssr === void 0 && $$bindings.ssr && ssr !== void 0)
    $$bindings.ssr(ssr);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return ` ${validate_component(Router, "Router").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Route, "Route").$$render(
        $$result,
        {
          path: "/access#login",
          component: Loginform
        },
        {},
        {}
      )} ${validate_component(Route, "Route").$$render(
        $$result,
        {
          path: "/access#register",
          component: Registerform
        },
        {},
        {}
      )} ${validate_component(Route, "Route").$$render(
        $$result,
        {
          path: "/access#:path",
          component: Loginform
        },
        {},
        {}
      )} ${validate_component(Route, "Route").$$render(
        $$result,
        {
          path: "/access:path",
          component: Loginform
        },
        {},
        {}
      )}`;
    }
  })}   ${escape(JSON.stringify(data))} `;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-veMfAwP0.js.map
