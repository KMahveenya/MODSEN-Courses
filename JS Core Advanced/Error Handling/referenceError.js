function errorHandling() {
    try {
        console.log(a);
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.error("Перехвачена ReferenceError:", error.message);
        } else {
            console.error("Другая ошибка:", error);
        }
    }
}

errorHandling();