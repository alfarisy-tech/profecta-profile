import { useRouter } from 'next/router';

const JobDetailsPage = () => {
    const router = useRouter();
    const { id } = router.query; // Mengambil parameter 'id' dari URL
    return (
        <div>
            <h1>Job Details for ID { id }</h1>
            {/* Tampilkan detail pekerjaan berdasarkan id */ }
        </div>
    );
};

export default JobDetailsPage;
