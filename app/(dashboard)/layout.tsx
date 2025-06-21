type Props = {
  children: React.ReactNode;
};
const DashboardLayout = (props: Props) => {
  return <div>{props.children}</div>;
};
export default DashboardLayout;
