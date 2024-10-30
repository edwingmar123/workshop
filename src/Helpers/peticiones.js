
export const getData = async (url_) => {
    try {
        const response = await fetch(url_);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        return result;
        //setData(result); // Set the fetched data to state
    } catch (error) {
        console.log('ERROR getdata'+ error);
        //setError(error); // Set error state
    } finally {
        console.log(false);
        //setLoading(false); // Set loading to false
    }
};


export const postData = async (url_,object)=>{
    try {
        const response = await fetch(url_,{
            method:'POST', 
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        return response;
    } catch (error) {
        console.log(error);
        //setError(error); // Set error state
    } finally {
        console.log(false);
        //setLoading(false); // Set loading to false
    }
}
