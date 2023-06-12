const MyParagraph: React.FC<{ children: React.ReactNode }> = (props) => {
    const { children } = props;
    return <p>{children}</p>;
};

export { MyParagraph };
