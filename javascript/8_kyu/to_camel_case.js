function toCamelCase(str){
    i = 0
    new_str = ""
    dash = false
    while (i < str.length) {
        if (str[i] == "-" || str[i] == "_") {
            new_str += ""
            dash = true
        } else if (dash) {
            new_str += str[i].toUpperCase()
            dash = false
        } else {
            new_str += str[i]
        }
        i += 1
    }
    return new_str
}


console.log(toCamelCase("the-stealth-warrior"))
