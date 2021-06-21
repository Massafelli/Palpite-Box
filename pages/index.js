import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import PageTitle from '../components/PageTitle';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Index = () => {
    const { data, err } = useSWR('/api/getPromo', fetcher);

    return (
        <div>
            <PageTitle title='Seja Bem-Vindo' />
            <p className='mt-12 text-center'>O restaurante X sempre busca por atendender melhor seus cliente.<br />
                Por isso sempre estamos abertos para ouvir a sua opinião.
            </p>
            <div className='text-center my-12'>
                <Link href='/pesquisa'>
                    <a className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Dar minha opinião ou sugestão</a>
                </Link>
            </div>
            {!data && <p>Carregando....</p>}
            {!err && data && data.showCoupon &&
                < p className='my-12 text-center'>
                    {data.message}
                </p>}
        </div >
    )
}

export default Index;