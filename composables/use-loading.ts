export const useLoading = ()=>{
    const loading = useState('loading', ()=>false);
    const loadingTitle = ref('Loading...');
    const hideLoading = ()=>(loading.value = !loading);

    return {
        loading, loadingTitle, hideLoading
    };
}