type PostProps = {
  params: {
    id: string;
  };
};

export default function Post({ params: { id } }: PostProps) {
  return <h1>Page № {id}</h1>;
}
