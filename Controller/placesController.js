const Places = require('../model/places')

module.exports={
    addPlaces: async (req,res)=>{
        const body = req.body
        console.log(body)
        const placename = body.placename
        const location = body.location
        const pic = body.pic
        const description = body.description
        const travelTime = body.travelTime
        const placeingNumber = body.placeingNumber
        const travelCost = body.travelCost

        const newPlace = new Places()
        newPlace.placename = placename
        newPlace.location = location
        newPlace.pic = pic
        newPlace.description = description
        newPlace.travelTime = travelTime
        newPlace.placeingNumber = placeingNumber
        newPlace.travelCost = travelCost
        console.log(newPlace)
        await newPlace.save()
        res.status(200).json({
            msg:placename+' Added'
        })
    },
    editplace: async (req,res)=>{
        const body = req.body
        const id = body.id
        const place = await Places.findOne({_id: id,status:"Active"})
        if (!place){
            res.status(404).json({
                msg:'Not Found'
            })

        }
        else {
            const newplace = await Places.findOneAndUpdate({_id : id},{$set:body})
            res.status(200).json({
                msg:place.placename+" Update data"
            })
        }

    },
    statusplace: async (req,res)=>{
        const body = req.body
        const id = body.id
        const status = body.status
        const data = await Places.findOne({_id:id})
        if(!data){
            res.status(404).json({
                msg:'Not Found'
            })
        }
        else {
            const statusbody = await Places.findOneAndUpdate({_id:id},{$set:{status:status}})
            res.status(202).json({
                msg:data.placename+" is "+status
            })
        }


    },
    allPlace : async (req,res)=>{
        const body = req.body
        const data =await Places.find({status:"Active"}).populate('Place').sort({placeingNumber:1})
        console.log(data)
        res.status(200).json(data)
    }
}