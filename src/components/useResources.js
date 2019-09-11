import React, { useState, useEffect } from 'react';
import jsonApi from '../apis/jsonapi';

const useResources = (resource) => {
    const [resourceList , setResource] = useState([]);

    const fetchResource = async (resource) => {
        const response = await jsonApi.get(`/${resource}`);
        setResource(response.data);
    }

    useEffect(() => {
        fetchResource(resource);
    }, [resource]);

    return resourceList;
}

export default useResources;
