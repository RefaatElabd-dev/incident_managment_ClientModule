export class Incident {
    constructor(public _id: string = '',
                public name: string = '',
                public resolved: boolean = false,
                public userId: string = ''){}
}