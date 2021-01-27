type ErrorPlaceholderProps = {
  onRetry: Function;
}

export default function ErrorPlaceholder({onRetry }: ErrorPlaceholderProps) {
  return (
    <div className="bg-gray-100 p-4 rounded text-center w-full">
      <p className="mt-2 text-gray-600">
        Oops! Something when wrong :(
      </p>
      <button
        className="px-4 py-2 text-blue-600"
        onClick={() => onRetry()}
      >
        Retry
      </button>
    </div>
  )
}
