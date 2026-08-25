function formatCoefficient(a) {
    return a === 1 ? "" : a;
}

function generateMultiplicationQuestion() {

    const firstNumber = Math.floor(Math.random() * 10); 
    const secondNumber = Math.floor(Math.random() * 10); 
    const isMultiplication = Math.random() < 0.5; 

    if(isMultiplication) {
        return {
            task: "Solve this multiplication: ",
            text: `${firstNumber} × ${secondNumber} = ?`, 
            answer: firstNumber * secondNumber 
        }; 
    } else {
        const divisor = Math.floor(Math.random() * 9) + 1; 
        const quotient = Math.floor(Math.random() * 10); 
        const dividend = divisor * quotient; 

        return {
            task: "Solve this division: ",
            text: `${dividend} ÷ ${divisor} = ?`, 
            answer: quotient
        }; 
    }
} 

function generateFractionsQuestion() {

    const questionType = Math.floor(Math.random() * 3); 

    if(questionType === 0) {
        //taskFractions.textContent = "Convert the fraction to a decimal: "; 

        const fractions = [
            {numerator: 1, denominator: 2, answer: 0.5},
            {numerator: 1, denominator: 4, answer: 0.25},
            {numerator: 3, denominator: 4, answer: 0.75},
            {numerator: 1, denominator: 1, answer: 1},
            {numerator: 1, denominator: 5, answer: 0.2}, 
            {numerator: 2, denominator: 5, answer: 0.4},
            {numerator: 3, denominator: 5, answer: 0.6},
            {numerator: 4, denominator: 5, answer: 0.8},
            {numerator: 1, denominator: 10, answer: 0.1},
            {numerator: 3, denominator: 10, answer: 0.3},
            {numerator: 7, denominator: 10, answer: 0.7},
        ];

        const fraction = fractions[Math.floor(Math.random() * fractions.length)]; 

        return {
            task: "Convert the fraction to a decimal: ", 
            text: `${fraction.numerator} / ${fraction.denominator} = ?`,
            answer: fraction.answer
        }; 
    } else if(questionType === 1) {
        //taskFractions.textContent = "Convert the decimal to a percentage: ";

        const decimals = [
            {decimal: 0.1, answer: 10},
            {decimal: 0.2, answer: 20}, 
            {decimal: 0.25, answer: 25}, 
            {decimal: 0.3, answer: 30}, 
            {decimal: 0.4, answer: 40},
            {decimal: 0.5, answer: 50}, 
            {decimal: 0.6, answer: 60}, 
            {decimal: 0.7, answer: 70}, 
            {decimal: 0.75, answer: 75}, 
            {decimal: 0.8, answer: 80}, 
            {decimal: 0.9, answer: 90}, 
            {decimal: 1, answer: 100}
        ]; 

        const decimal = decimals[Math.floor(Math.random() * decimals.length)];
        return  {
            task: "Convert the decimal to a percentage: ", 
            text: `${decimal.decimal} = ?%`, 
            answer: decimal.answer
        };
    } else {
        //taskFractions.textContent = "Convert the percentage to a decimal: "; 

        const percentages = [
            {percentage: 10, answer: 0.1}, 
            {percentage: 20, answer: 0.2}, 
            {percentage: 25, answer: 0.25}, 
            {percentage: 30, answer: 0.3}, 
            {percentage: 40, answer: 0.4}, 
            {percentage: 50, answer: 0.5}, 
            {percentage: 60, answer: 0.6}, 
            {percentage: 75, answer: 0.75}, 
            {percentage: 80, answer: 0.8}, 
            {percentage: 90, answer: 0.9}, 
            {percentage: 100, answer: 1}, 
        ];

        const percent = percentages[Math.floor(Math.random() * percentages.length)]; 

        return {
            task: "Convert the percentage to a decimal: ", 
            text: `${percent.percentage}% = ?`,
            answer: percent.answer
        };
    }
} 

function generatePowersQuestion() {

    const questionType = Math.floor(Math.random() * 2); 
    const maxNumberPowers = 25; 
    const number = Math.floor(Math.random() * maxNumberPowers) + 1; 

    if(questionType === 0) {
        return {
            task: "Calculate the square: ", 
            text: `${number}² = ?`, 
            answer: number ** 2
        };
    } else {
        const square = number ** 2; 

        return {
            task: "Find the square root: ", 
            text: `√${square} = ?`, 
            answer: number
        };
    }
}

function generateGeometryQuestion() {

    const questionType = Math.floor(Math.random() * 8); 
    const PI = 3.14;

    if(questionType === 0) {                        // rectangle: perimeter

        const a = Math.floor(Math.random() * 10) + 1;
        const b = Math.floor(Math.random() * 10) + 1;

        return {
            task: "Calculate the perimeter of the rectangle: ", 
            text: `a = ${a}, b = ${b} → P = ?`, 
            answer: 2 * (a + b), 
            diagram: DiagramFactory.create("rectangle", {a, b})
        };

    } else if(questionType === 1) {                 // rectangle: area

        const a = Math.floor(Math.random() * 10) + 1;
        const b = Math.floor(Math.random() * 10) + 1; 

        return {
            task: "Calculate the area of the rectangle: ", 
            text: `a = ${a}, b = ${b} → S = ?`, 
            answer: a * b, 
            diagram: DiagramFactory.create("rectangle", {a, b})
        };

    } else if(questionType === 2) {                 // equilateral triangle: perimeter 

        const a = Math.floor(Math.random() * 10) + 1; 

        return {
            task: "Calculate the perimeter of the equilateral triangle: ", 
            text: `a = ${a} → P = ?`, 
            answer: a * 3, 
            diagram: DiagramFactory.create("equilateralTriangle", {a})
        };

    } else if(questionType === 3) {                 // equilateral triangle: area 

        const a = Math.floor(Math.random() * 10) + 1; 
        const answer = Number((a ** 2 * Math.sqrt(3)).toFixed(2));

        return {
            task: "Calculate the area of the equilateral triangle: ", 
            text: `a = ${a} → S = ?`, 
            answer: answer, 
            diagram: DiagramFactory.create("equilateralTriangle", {a})
        };

    } else if(questionType === 4) {                 // right triangle: perimeter 

        const triangles = [
            {a: 3, b: 4, c: 5},
            {a: 5, b: 12, c: 13},
            {a: 6, b: 8, c: 10}, 
            {a: 8, b: 15, c: 17}
        ]; 

        const triangle = triangles[Math.floor(Math.random() * triangles.length)]; 

        return {
            task: "Calculate the perimeter of the right triangle: ", 
            text: `a = ${triangle.a}, b = ${triangle.b}, c = ${triangle.c} → P = ?`, 
            answer: triangle.a + triangle.b + triangle.c, 
            diagram: DiagramFactory.create("rightTriangle", {a: triangle.a, b: triangle.b, c: triangle.c })
        };

    } else if(questionType === 5) {                 // right triangle: area 

        const triangles = [
            {a: 3, b: 4}, 
            {a: 5, b: 12}, 
            {a: 6, b: 8}, 
            {a: 8, b: 15}
        ]; 

        const triangle = triangles[Math.floor(Math.random() * triangles.length)]; 

        return {
            task: "Calculate the area of the right triangle: ", 
            text: `a = ${triangle.a}, b = ${triangle.b} → S = ?`, 
            answer: (triangle.a * triangle.b) / 2, 
            diagram: DiagramFactory.create("rightTriangle", {a: triangle.a, b: triangle.b})
        };

    } else if(questionType === 6) {                 // circle: circumference 

        const r = Math.floor(Math.random() * 10) + 1; 
        const answer = Number((2 * PI * r).toFixed(2)); 

        return {
            task: "Calculate the circumference of the circle: ", 
            text: `r = ${r} → C = ?`, 
            answer: answer, 
            diagram: DiagramFactory.create("circle", {r})
        };

    } else {                                        // circle: area 

        const r = Math.floor(Math.random() * 10) + 1; 
        const answer = Number((PI * r ** 2).toFixed(2)); 

        return {
            task: "Calculate the area of the circle: ", 
            text: `r = ${r} → S = ?`, 
            answer: answer, 
            diagram: DiagramFactory.create("circle", {r})
        }; 

    }
}

function generateSolidGeometryQuestion() {

    const questionType = Math.floor(Math.random() * 6); 
    const PI = 3.14; 

    if(questionType === 0) {                     // cube: volume
        const a = Math.floor(Math.random() * 10) + 1; 

        return {
            task: "Calculate the volume of the cube: ", 
            text: `a = ${a} → V = ?`, 
            answer: a ** 3, 
            diagram: DiagramFactory.create("cube", {a})
        };
    } else if(questionType === 1) {              // cube: surface area
        const a = Math.floor(Math.random() * 10) + 1; 

        return {
            task: "Calculate the surface area of the cube: ", 
            text: `a = ${a} → SA = ?`, 
            answer: 6 * a ** 2, 
            diagram: DiagramFactory.create("cube", {a})
        }; 
    } else if(questionType === 2) {             // rectangular prism: volume
        const length = Math.floor(Math.random() * 10) + 1;
        const width = Math.floor(Math.random() * 10) + 1; 
        const height = Math.floor(Math.random() * 10) + 1;

        return {
            task: "Calculate the volume of the rectangular prism: ", 
            text: `a = ${length}, b = ${width}, h = ${height} → V = ?`, 
            answer: length * width * height, 
            diagram: DiagramFactory.create("rectangularPrism", {length, width, height})
        };
    } else if(questionType === 3) {             // rectangular prism: surface area
        const length = Math.floor(Math.random() * 10) + 1;
        const width = Math.floor(Math.random() * 10) + 1; 
        const height = Math.floor(Math.random() * 10) + 1; 

        return {
            task: "Calculate the surface area of the rectangular prism: ", 
            text: `a = ${length}, b = ${width}, h = ${height} → SA = ? `, 
            answer: 2 * (length * width + length * height + width * height), 
            diagram: DiagramFactory.create("rectangularPrism", {length, width, height})
        };
    } else if(questionType === 4) {             // cylinder: volume
        const r = Math.floor(Math.random() * 10) + 1; 
        const h = Math.floor(Math.random() * 10) + 1; 
        const answer = Number((PI * r ** 2 * h).toFixed(2));

        return {
            task: "Calculate the volume of the cylinder: ", 
            text: `r = ${r}, h = ${h} → V = ?`, 
            answer: answer, 
            diagram: DiagramFactory.create("cylinder", {r, h})
        };
    } else {             // cylinder: surface area
        const r = Math.floor(Math.random() * 10) + 1; 
        const h = Math.floor(Math.random() * 10) + 1; 
        const answer = Number((2 * PI * r * (r + h)).toFixed(2));

        return {
            task: "Calculate the surface area of the cylinder: ", 
            text: `r = ${r}, h = ${h} → SA = ?`, 
            answer: answer, 
            diagram: DiagramFactory.create("cylinder", {r, h})
            }
        }; 
    }

function generateTrigonometryQuestion() {

    const questionType = Math.floor(Math.random() * 4); 
    const sinQuestions = [
        {angle: 0, answer: 0}, 
        {angle: 30, answer: 0.5}, 
        {angle: 90, answer: 1}, 
        {angle: 150, answer: 0.5}, 
        {angle: 180, answer: 0}, 
        {angle: 210, answer: -0.5}, 
        {angle: 270, answer: -1}, 
        {angle: 330, answer: -0.5}, 
        {angle: 360, answer: 0},
    ]; 
    const cosQuestions = [
        {angle: 0, answer: 1}, 
        {angle: 60, answer: 0.5}, 
        {angle: 90, answer: 0}, 
        {angle: 120, answer: -0.5}, 
        {angle: 180, answer: -1}, 
        {angle: 240, answer: -0.5}, 
        {angle: 270, answer: 0}, 
        {angle: 300, answer: 0.5}, 
        {angle: 360, answer: 1},
    ]; 
    const tanQuestions = [
        {angle: 0, answer: 0}, 
        {angle: 45, answer: 1}, 
        {angle: 135, answer: -1}, 
        {angle: 180, answer: 0}, 
        {angle: 225, answer: 1}, 
        {angle: 315, answer: -1}, 
        {angle: 360, answer: 0} 
    ];

    if(questionType === 0) { 
        const question = sinQuestions[Math.floor(Math.random() * sinQuestions.length)]; 

        return {
            task: "Calculate the sine: ", 
            text: `sin ${question.angle}° = ?`, 
            answer: question.answer, 
            diagram: DiagramFactory.create("unitCircle", {angle: question.angle})
        };
    } else if(questionType === 1) {
        const question = cosQuestions[Math.floor(Math.random() * cosQuestions.length)];
        return {
            task: "Calculate the cosine: ",
            text: `cos ${question.angle}° = ?`,
            answer: question.answer, 
            diagram: DiagramFactory.create("unitCircle", {angle: question.angle})
        };
    } else if(questionType === 2) { 
        const question = tanQuestions[Math.floor(Math.random() * tanQuestions.length)];
        return {
            task: "Calculate the tangent: ", 
            text: `tan ${question.angle}° = ?`, 
            answer: question.answer, 
            diagram: DiagramFactory.create("unitCircle", {angle: question.angle})
        };
    } else {
        const triangles = [
            {a: 3, b: 4, c: 5},
            {a: 5, b: 12, c: 13}, 
            {a: 6, b: 8, c: 10}
        ]; 
        const triangle = triangles[Math.floor(Math.random() * triangles.length)]; 

        return {
            task: "Find the hypotenuse using the Pythagorean theorem: ", 
            text: `a = ${triangle.a}, b = ${triangle.b}, → c = ?`, 
            answer: triangle.c, 
            diagram: DiagramFactory.create("rightTriangle", {a: triangle.a, b: triangle.b, c: triangle.c} )
        };
    }
} 

function generateAlgebraQuestion() {

    const questionType = Math.floor(Math.random() * 5); 

    if(questionType === 0) {
        const x = Math.floor(Math.random() * 10) + 1; 
        const a = Math.floor(Math.random() * 9) + 1; 
        const b = Math.floor(Math.random() * 10) + 1; 
        const coefficient = formatCoefficient(a);
        const result = a * x + b; 

        return {
            task: "Solve for x: ", 
            text: `
                <span class="equation">
                    <span>${coefficient}x + ${b} = ${result}</span>
                    <span class="equation-answer">x = ?</span>
                </span>
            `,
            answer: x
        };
    } else if(questionType === 1) {
        const x = Math.floor(Math.random() * 10) + 1; 
        const a = Math.floor(Math.random() * 9) + 1; 
        const b = Math.floor(Math.random() * 10) + 1; 
        const coefficient = formatCoefficient(a);
        const result = a * x - b; 

        return {
            task: "Solve for x: ", 
            text: `
                <span class="equation">
                    <span>${coefficient}x - ${b} = ${result}</span>
                    <span class="equation-answer">x = ?</span>
                </span>
            `,
            answer: x
        };
    } else if(questionType === 2) {
        const x = Math.floor(Math.random() * 10) + 1; 
        const b = Math.floor(Math.random() * 10) + 1; 
        const result = x + b; 

        return {
            task: "Solve for x: ",
            text: `
                <span class="equation">
                    <span>x + ${b} = ${result}</span>
                    <span class="equation-answer">x = ?</span>
                </span>
            `,
            answer: x
        };
    } else if(questionType === 3) {
        const x = Math.floor(Math.random() * 10) + 1; 
        const b = Math.floor(Math.random() * 10) + 1; 
        const result = x - b; 

        return {
            task: "Solve for x: ",
            text: `
                <span class="equation">
                    <span>x - ${b} = ${result}</span>
                    <span class="equation-answer">x = ?</span>
                </span>
            `,
            answer: x
        };
    } else {
        const x = Math.floor(Math.random() * 10) + 1; 
        const a = Math.floor(Math.random() * 9) + 1; 
        const coefficient = formatCoefficient(a);
        const result = a * x; 

        return {
            task: "Solve for x: ",
            text: `
                <span class="equation">
                    <span>${coefficient}x = ${result}</span>
                    <span class="equation-answer">x = ?</span>
                </span>
            `,
            answer: x
        };
    }
} 

function generateCalculusQuestion() {

    const questionType = Math.floor(Math.random() * 6); 

    if(questionType === 0) {
        const x = Math.floor(Math.random() * 10) + 1; 

        return {
            task: `Find the derivative at x, given x = ${x}: `, 
            text: `
                <span class="equation">
                    <span>f (x) = x²</span>
                    <span class="equation-answer">f'(x) = ?</span>
                </span>
            `,
            answer: 2 * x
        };
    } else if(questionType === 1) {

        const x = Math.floor(Math.random() * 10) + 1; 

        return {
            task: `Find the derivative at x, given x = ${x}: `,  
            text: `
                <span class="equation">
                    <span>f (x) = x³</span>
                    <span class="equation-answer">f'(x) = ?</span>
                </span>
            `,
            answer: 3 * x ** 2
        };
    } else if(questionType === 2) {
        const x = Math.floor(Math.random() * 10) + 1; 
        const a = Math.floor(Math.random() * 9) + 1; 
        const b = Math.floor(Math.random() * 10) + 1; 
        const coefficient = formatCoefficient(a); 

        return {
            task: `Find the derivative at x, given x = ${x}: `, 
            text: `
                <span class="equation">
                    <span>f (x) = ${coefficient}x² + ${b}</span>
                    <span class="equation-answer">f'(x) = ?</span>
                </span>
            `, 
            answer: 2 * a * x
        };
    } else if(questionType === 3) {
        const x = Math.floor(Math.random() * 10) + 1; 
        const a = Math.floor(Math.random() * 9) + 1; 
        const coefficient = formatCoefficient(a);

        return {
            task: `Find the derivative at x, given x = ${x}: `, 
            text: `
                <span class="equation">
                    <span>f (x) = ${coefficient}x³</span>
                    <span class="equation-answer">f'(x) = ?</span>
                </span>
            `, 
            answer: 3 * a * x ** 2
        };
    } else if(questionType === 4) {
        const upper = Math.floor(Math.random() * 5) + 1; 

        return {
            task: "Calculate the integral: ", 
            text: `
                <span class="integral">
                    <span class="integral-symbol">∫</span>
                    <span class="integral-limits">
                        <span class="upper">${upper}</span> 
                        <span class="lower">0</span>
                    </span>
                </span> 
                1 dx = ?
            `,
            answer: upper
        };
    } else {
        const upper = Math.floor(Math.random() * 5) + 1;

        return {
            task: "Calculate the integral: ", 
            text: `
                <span class="integral">
                    <span class="integral-symbol">∫</span>
                    <span class="integral-limits">
                        <span class="upper">${upper}</span> 
                        <span class="lower">0</span>
                    </span>
                </span> 
                2x dx = ?
            `, 
            answer: upper ** 2
        };
    }
}

/*export {
    generateMultiplicationQuestion, 
    generateFractionsQuestion, 
    generatePowersQuestion, 
    generateGeometryQuestion, 
    generateSolidGeometryQuestion, 
    generateTrigonometryQuestion, 
    generateAlgebraQuestion, 
    generateCalculusQuestion
};*/