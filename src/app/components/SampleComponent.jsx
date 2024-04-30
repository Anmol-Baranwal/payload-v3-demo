import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

export async function SampleComponent() {
  const payload = await getPayloadHMR({ config })

  const users = await payload.find({
    collection: 'users'
  })

  return (
    <div className="bg-gray-300 text-black p-20 border border-white">
      <h2>Hi! This is anmol</h2>
      <div>Testing the latest Payload 3.0 beta release</div>

      <h2 className="pt-4 text-underline">Users Data</h2>
      {users.docs.map((user) => {
        return (
          <div className="flex flex-col my-4">
            <div key={user._id} className="flex text-lg space-x-8 w-[600px] bg-gray-800 text-gray-300 px-4 py-4 rounded-md">
              <div>Email: {user.email}</div>
              <div>ID: {user.id}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
