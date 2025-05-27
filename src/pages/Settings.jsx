import { useQuery } from '@tanstack/react-query';
import { SettingsTemplate, Spinner1, useModulesStore } from '../index'

const Settings = () => {
    const { showModules } = useModulesStore();
    const {  isLoading, error } = useQuery({ queryKey: "mostras md", queryFn: showModules });

    if (isLoading) {
        return (<Spinner1 />)
    }
    if (error) {
        return (<span>Error</span>)
    }

    return (<SettingsTemplate />)
}
export default Settings