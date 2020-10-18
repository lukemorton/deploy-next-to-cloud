import NextReplicaResponse from './response'

describe('NextReplicaResponse', () => {
  it('has statusCode, headers and body props', () => {
    const response = new NextReplicaResponse;
    expect(response).toHaveProperty('statusCode')
    expect(response).toHaveProperty('headers')
    expect(response).toHaveProperty('body')
  })

  it('sets statusCode to 200 by default', () => {
    const response = new NextReplicaResponse;
    expect(response.statusCode).toEqual(200)
  })

  it('sets headers to {} by default', () => {
    const response = new NextReplicaResponse;
    expect(response.headers).toEqual({})
  })

  it('sets body to undefined by default', () => {
    const response = new NextReplicaResponse;
    expect(response.body).toBeUndefined()
  })

  it('can set object as JSON body', () => {
    const response = new NextReplicaResponse;
    response.json({ ok: true })
    expect(response.headers).toEqual(
      expect.objectContaining({ 'Content-Type': 'application/json'})
    )
    expect(response.body).toEqual('{"ok":true}')
  })

  it('has fluid interface for chaining methods', () => {
    const response = new NextReplicaResponse;
    expect(response.json({})).toBe(response)
  })
})
