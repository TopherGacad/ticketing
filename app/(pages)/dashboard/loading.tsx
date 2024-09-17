// /app/login/loading.tsx
export default function Loading() {
    return (
      <div className="h-full w-full flex justify-center items-center m-0 ">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  