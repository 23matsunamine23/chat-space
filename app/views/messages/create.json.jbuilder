json.content @message.content
json.image @message.image
json.id @message.id
json.name @message.user.name
json.date @message.created_at.strftime("%Y年%m月%d日 %H時%M分")
