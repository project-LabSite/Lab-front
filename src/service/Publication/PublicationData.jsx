const GoogleSheetData = async () => {
    const apiKey = 'AIzaSyBeSewnHdPxxqJDEpyHKpjxgV16NxZzznI'; 
    const sheetId = '1oyZ9SXKkPqAblhuLpiojxCQ42Eunvar1fddnhvUQfls'; 
    const range = '시트1!A1:G100'; 

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

    try {
        const response = await fetch(url);
        const result = await response.json();

        if (result.values) {
            const headers = result.values[0];
            const rows = result.values.slice(1);
            const publicationData = rows.map((row) => {
                return headers.reduce((obj, header, index) => {
                    obj[header] = row[index] || ''; 
                    return obj;
                }, {});
            });
            console.log(publicationData);
            return publicationData; 
        } else {
            console.error('데이터가 없습니다.');
            return [];
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

export default GoogleSheetData;