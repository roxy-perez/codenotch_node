
class Professional {

    constructor(name, age, weight, height, isRetired, nationality, oscarsNumber, profession) {
        this._name = name;
        this._age = age;
        this._weight = weight;
        this._height = height;
        this._isRetired = isRetired;
        this._nationality = nationality;
        this._oscarsNumber = oscarsNumber;
        this._profession = profession;
    }

    // Getters y setters 
    get name() {
        return this._name.toUpperCase();
    }
    get age() {
        return this._age;
    }
    get weight() {
        return this._weight;
    }
    get weight() {
        return this._height;
    }
    get isRetired() {
        return this._isRetired;
    }
    get nationality() {
        return this._nationality;
    }
    get oscarsNumber() {
        return this._oscarsNumber;
    }
    get profession() {
        return this._profession;
    }

    set name(name) {
        this._name = name.toUpperCase();
    }
    set age(age) {
        this._age = age;
    }
    set weight(weight) {
        this._weight = weight;
    }
    set height(height) {
        this._height = height;
    }
    set isRetired(isRetired) {
        this._isRetired = isRetired;
    }
    set nationality(nationality) {
        this._nationality = nationality;
    }
    set oscarsNumber(oscarsNumber) {
        this._oscarsNumber = oscarsNumber;
    }
    set profession(profession) {
        this._profession = profession;
    }

}

module.exports = Professional;
