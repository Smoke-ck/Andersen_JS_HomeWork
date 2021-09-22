class Car {

    #brand;
    #model;
    #yearOfManufacturing;
    #maxSpeed;
    #maxFuelVolume;
    #fuelConsumption;
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;

    set brand(value) {
        if (typeof value !== "string" || undefined || value.length < 1 || value.length > 50) {
            throw new Error('Марка не строка')
        }
        this.#brand = value;
    }

    get brand() {
        return this.#brand;
    }

    set model(value) {
        if (typeof value !== "string" || undefined || value.length < 1 || value.length > 50) {
            throw new Error('Модель не строка')
        }
        this.#model = value;
    }

    get model() {
        return this.#model;
    }

    set yearOfManufacturing(value) {
        if (!Number.isInteger(value) || value < 1900 || value > 2021) {
            throw new Error('Некорректный год выпуска')
        }
        this.#yearOfManufacturing = value;
    }

    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }

    set maxSpeed(value) {
        if (!Number.isInteger(value) || value < 100 || value > 300) {
            throw new Error('Некорректное значение скорости')
        };
        this.#maxSpeed = value;
    }

    get maxSpeed() {
        return this.#maxSpeed;
    }

    set maxFuelVolume(value) {
        if (!Number.isInteger(value) || value < 5 || value > 20) {
            throw new Error('Некорректное значение топливного бака')
        }
        this.#maxFuelVolume = value;
    }

    get maxFuelVolume() {
        return this.#maxFuelVolume;
    }

    set fuelConsumption(value) {
        if (!Number.isInteger(value)) throw new Error('Некорректное значение топлива');
        this.#fuelConsumption = value;
    }

    get fuelConsumption() {
        return this.#fuelConsumption;
    }

    get currentFuelVolume() {
        return this.#currentFuelVolume;
    }

    get isStarted() {
        return this.#isStarted;
    }

    get mileage() {
        return this.#mileage;
    }

    start() {
        if (this.#isStarted === true) {
            throw new Error('Машина уже заведена')
        } else if (this.#currentFuelVolume === 0) {
            throw new Error('В баке нет топлива')
        }
        return this.#isStarted = !this.#isStarted;
    }

    shutDownEngine() {
        if (this.#isStarted === false) throw new Error('Машина ещё не заведена')
        return this.#isStarted = !this.#isStarted;
    }

    fillUpGasTank(numberOfLiter) {
        if (!Number.isInteger(numberOfLiter) || numberOfLiter <= 0) {
            throw new Error('Неверное количество топлива для заправки')
        } else if ((this.#currentFuelVolume + numberOfLiter) > this.#maxFuelVolume) {
            throw new Error('Топливный бак переполнен')
        }
        this.#currentFuelVolume = this.#currentFuelVolume + numberOfLiter;
    }

    drive(speed, time) {
        if (!Number.isInteger(speed) || speed <= 0) {
            throw new Error('Неверная скорость')
        } else if (!Number.isInteger(time) || time <= 0) {
            throw new Error('Неверная количество часов')
        } else if (speed > this.#maxSpeed) {
            throw new Error('Машина не может ехать так быстро')
        } else if (this.#isStarted === false) {
            throw new Error('Машина должна быть заведена, чтобы ехать')
        } else if (((speed * time) / 100 * this.#fuelConsumption) > this.#currentFuelVolume) {
            throw new Error('Недостаточно топлива')
        }
        this.#mileage = (speed * time);
        this.#currentFuelVolume = this.#currentFuelVolume - ((speed * time) / 100 * this.#fuelConsumption);
    }
}

module.exports = Car;