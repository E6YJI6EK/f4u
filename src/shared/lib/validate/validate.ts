export type validation = {
    field: any;
    rule: () => boolean;
}

export function validate(validations:validation[]): void {
    for (let validation of validations) {
        
    }
}

