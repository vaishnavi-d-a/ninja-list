import Layout from '../comps/Layout'
import '../style/globals.css'

function MYAPP({ Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps} /> 
        </Layout>
    )       
}

export default MYAPP 