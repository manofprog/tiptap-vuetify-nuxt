import IconInterface from './IconInterface'

export default class VuetifyIcon implements IconInterface {
  constructor(public name: any) {
  }

  toString() {
    return this.name
  }
}
