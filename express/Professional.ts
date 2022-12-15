export class Professional {
    constructor(
      private name: string,
      private age: number,
      private weight: number,
      private height: number,
      private isRetired: boolean,
      private nationality: string,
      private oscarsNumber: number,
      private profession: string
    ) { }
  
    // Gtters y setters 
    public getName() {
      return this.name;
    };
    public getAge() {
      return this.age;
    };
    public getweight() {
      return this.weight;
    };
    public getHeight() {
      return this.height;
    };
  
    public getIsRetired() {
      return this.isRetired;
    }
  
    public getNationality() {
      return this.nationality;
    };
    public getOscarsNumber() {
      return this.oscarsNumber;
    };
    public getProfession() {
      return this.profession;
    };
  
    public setName(name: string) {
      this.name = name;
    }
    public setAge(age: number) {
      this.age = age;
    }
    public setWeight(weight: number) {
      this.weight = weight;
    }
    public setHeight(height: number) {
      this.height = height;
    }
    public setIsRetired(isRetired: boolean) {
      this.isRetired = isRetired;
    }
    public setNationality(nationality: string) {
      this.nationality = nationality;
    }
    public setOscarsNumber(oscarsNumber: number) {
      this.oscarsNumber = oscarsNumber;
    }
    public setProfession(profession: string) {
      this.profession = profession;
    }
  
  
    public printAll() {
      for (const key in this) {
        console.log(this[key]);
      }
    }
  
  
  }
  