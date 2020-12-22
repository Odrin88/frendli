import React from "react";

export const required = value => {
    if (value) return undefined;
    return 'Field is required';
}

export const maxLengthCreator = (maxLenght) => (value) => {
    if (value.length > maxLenght) return `Max length is ${maxLenght} symbols`;
    return undefined;
}


export const minLengthCreator = (minLenght) => (value) => {
    if (value.length < minLenght) return `Max length is ${minLenght} symbols`;
    return undefined;
}

export const validEmail = value => {
    if (!value) {
        return 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Invalid email address';
    }
}