import PageHeader from "../default/PageHeader/PageHeader";

interface IPageContainer {
    children: React.ReactElement;
}

export default function PageContainer({ children }: IPageContainer) {
    return (
        <div>
            <PageHeader />
            {children && (children)}
        </div>
    );
};