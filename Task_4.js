function ElectricalDevices(name, power) {
    this.name = name
    this.power = power
    this.isIncluded = false
}

ElectricalDevices.prototype.included = function () {
    console.log(this.name + " is included");
    this.isIncluded = true
}

ElectricalDevices.prototype.getPowerOn = function () {
    return this.isIncluded ? this.power : 0
}

const lamp = new ElectricalDevices('lamp', 50);
const pc = new ElectricalDevices('pc', 80);

console.log(lamp.getPowerOn() + pc.getPowerOn());

lamp.included();
console.log(lamp.getPowerOn() + pc.getPowerOn());

pc.included();
console.log(lamp.getPowerOn() + pc.getPowerOn());