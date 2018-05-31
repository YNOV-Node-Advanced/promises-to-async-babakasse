async function superCompress(input) {
    let content;
    try{
        const cached = await readFromCache(input);
        content  = await cleanCacheMetadata(cached);
    }
    catch(error){
        if (error.code != 'NoCache') {
            throw error;
        }

        content = await readFromFile(input);
        content = await compress(content);

    }

    return compress(content);
}