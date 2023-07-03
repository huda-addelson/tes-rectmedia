function App() {
  const dataFeed = [
    { id: 1, title: 'pribadi', bg: 'bg-slate-600' },
    { id: 2, title: 'Umum', bg: 'bg-yellow-500' },
    { id: 3, title: 'Private', bg: 'bg-sky-400' },
    { id: 3, title: 'Adat', bg: 'bg-green-400' },
  ];
  return (
    <div className='flex w-full mx-auto justify-center'>
      <div className='container max-w-4xl pt-10'>
        <div className='flex gap-20 items-center'>
          <div className='w-64'>
            <img src='profile.jpg' alt='' />
          </div>
          <div className='flex flex-col gap-5'>
            <div className='flex items-center gap-10'>
              <h3 className=''>Google</h3>
              <div className='flex items-center gap-3'>
                <div className='py-2 px-4 text-sm bg-slate-500 rounded-lg opacity-70 font-bold'>
                  Ikuti
                </div>
                <div className='py-2 px-4 text-sm bg-slate-500 rounded-lg opacity-70 font-bold'>
                  Kirim Pesan
                </div>
              </div>
            </div>
            <div className='flex items-center gap-5 font-semibold'>
              <p>2.203 Kiriman</p>
              <p>4 Juta Pengikut</p>
              <p>35 Di ikuti </p>
            </div>
            <div className='flex flex-col'>
              <h2 className='text-base font-medium'>Google</h2>
              <p className='text-slate-700'>Perusahaan Internet</p>
              <span className='w-8/12'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                reiciendis.
              </span>
              <div></div>
            </div>
          </div>
        </div>
        <div className='flex gap-10 mt-9'>
          {dataFeed.map((data) => {
            return (
              <div key={data.id} className='flex flex-col items-center gap-2'>
                <div className={`w-16 rounded-full h-16 ${data.bg}`}></div>
                <div>{data.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
