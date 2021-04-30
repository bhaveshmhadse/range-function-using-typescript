
const range = (startNumber?: number, endNumber?: number, incrementalFactor?: number): number[] => {

   let noArgumentsGiven: boolean = (startNumber == undefined && endNumber == undefined && incrementalFactor == undefined);

   if (noArgumentsGiven) return;

   let array: number[] = [];

   let allArgumentsGiven = startNumber && endNumber && incrementalFactor;
   let onlyRangeGiven = startNumber && endNumber;

   function fillArray(start: number, end: number, incrementFactor: number): number[] {
      for (let i = start; i < end; i = i + incrementFactor) {
         array.push(i);
      }

      return array;
   }

   if (allArgumentsGiven) {
      if (incrementalFactor > 0) return fillArray(startNumber, endNumber, incrementalFactor);

      let positiveIncrement = -incrementalFactor;
      return fillArray(endNumber, startNumber, positiveIncrement);
   }

   else if (onlyRangeGiven) {
      if (startNumber > endNumber) console.error('Invalid Arguments');

      return fillArray(startNumber, endNumber, 1);
   }

   return fillArray(0, startNumber, 1);
};



console.log("With No Arguments : ", range());
console.log("With Final Number : ", range(10));
console.log("With Specified Range : ", range(1, 20));
console.log("With Specified Range & Incremental Factor : ", range(1, 15, 2));
console.log("With Specified Range & Negative Incremental Factor : ", range(10, -20, -2));
