
const handleServiceChange = (e, index) => {
    const {name, value} = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
}
export default handleServiceChange;