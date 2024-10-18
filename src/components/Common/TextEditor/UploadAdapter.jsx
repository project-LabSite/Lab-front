class MyUploadAdapter {
    constructor(loader) {
        this.loader = loader;
    }

    upload() {
        return this.loader.file.then(
            (file) =>
                new Promise((resolve, reject) => {
                    const data = new FormData();
                    data.append('file', file);

                    fetch('http://localhost:5000/upload', {
                        method: 'POST',
                        body: data,
                    })
                        .then((response) => response.json())
                        .then((result) => {
                            resolve({
                                default: result.url,
                            });
                        })
                        .catch((error) => {
                            reject(error);
                        });
                })
        );
    }

    abort() {
        // Handle abort if necessary
    }
}

function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return new MyUploadAdapter(loader);
    };
}

export default MyCustomUploadAdapterPlugin;
