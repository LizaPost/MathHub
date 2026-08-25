class DiagramFactory {

    static create(type, data = {}) {

        switch (type) {
            case "rectangle": 
                return rectangleDiagram(data); 

            case "equilateralTriangle": 
                return equilateralTriangleDiagram(data); 

            case "rightTriangle": 
                return rightTriangleDiagram(data); 

            case "circle": 
                return circleDiagram(data); 

            case "cube": 
                return cubeDiagram(data); 

            case "rectangularPrism": 
                return rectangularPrismDiagram(data); 

            case "cylinder": 
                return cylinderDiagram(data); 

            case "unitCircle": 
                return unitCircleDiagram(data.angle); 

            default: 
                throw new Error(`Unknown diagram type: ${type}`);
        }
    }
}