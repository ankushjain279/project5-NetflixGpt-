export const BODY ="https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_large.jpg"

export const LOGO="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const API_OPTION={  
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization:  import.meta.env.VITE_APP_Authorization
    }
  }

export const IMG_CDN_URL="https://image.tmdb.org/t/p/w300"  

export const SUPPORTED_LANGUAGE =
[{identifier: 'en', name:'English'},
{identifier: 'hindi', name:'Hindi'},
{identifier: 'spanish', name:'Spanish'}]

export const OPEN_AI= import.meta.env.VITE_OPEN_AI;