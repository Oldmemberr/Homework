class ElectricalDevices {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isIncluded = false;
    }
    getinfo()
    {
        console.log(this.name + " is included!");
        this.isIncluded = true;
    }

    getinfo()
    {
        return this.isIncluded ? this.power : 0;
    }
}

class MadeIn extends ElectricalDevices {
    constructor(fabricator, name) {
        super(name);
        this.fabricator = fabricator;
    }

    getinfo(){
        if (this.name) {
            return 'Made in ' + this.name
        } else {
            return super.getinfo()
        }
    }
}

const made = new MadeIn(true, 'China');
console.log(made.getinfo())


// function ElectricalDevices(name, power) {
//     this.name = name
//     this.power = power
//     this.isIncluded = false
// }
//
// ElectricalDevices.prototype.included = function () {
//     console.log(this.name + " is included");
//     this.isIncluded = true
// }
//
// ElectricalDevices.prototype.getPowerOn = function () {
//     return this.isIncluded ? this.power : 0
// }
//
// const lamp = new ElectricalDevices('lamp', 50);
// const pc = new ElectricalDevices('pc', 80);
//
// console.log(lamp.getPowerOn() + pc.getPowerOn());
//
// lamp.included();
// console.log(lamp.getPowerOn() + pc.getPowerOn());
//
// pc.included();
// console.log(lamp.getPowerOn() + pc.getPowerOn());