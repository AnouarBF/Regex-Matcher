// writing the regex function

const matching = (text, regex) => {

    const txt = String(text);
    const reg = eval(regex)
    const rslt = txt.match(reg);

    return rslt;
}

export default matching;