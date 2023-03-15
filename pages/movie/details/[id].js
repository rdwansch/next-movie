import { useRouter } from 'next/router';

export default function index() {
  const router = useRouter();
  return (
    <div>
      <h1>Movie Details</h1>
      <p>id = {router.query.id}</p>
    </div>
  );
}
