export default class MathCharacter {
  constructor(name) {
    this.name = name;
  }

  set stoned(bool) {
    this.stonedValue = bool;
  }

  get stoned() {
    return this.stonedValue;
  }


  set attack(value) {
    this.attackValue = value;
  }

  get attack() {
    let damageStr;
    damageStr = this.attackValue - (this.attackValue * (this.distanse - 1) * 0.1);
    if (this.stonedValue) {
      damageStr -= Math.log2(this.distanse) * 5;
    }
    return damageStr;
  }
}
