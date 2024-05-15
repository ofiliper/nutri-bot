import PageHeader from "../default/PageHeader/PageHeader";

interface IPageContainer {
    children: React.ReactElement;
    className?: string;
}

export default function PageContainer({ children, className }: IPageContainer) {
    return (
        <div className={className}>
            <PageHeader />
            {children && (children)}
        </div>
    );
};