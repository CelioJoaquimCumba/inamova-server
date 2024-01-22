import { Request, Response } from "express";
import { Subject } from "../../models/subject.model.js";
import { getSubjectsService } from "../../services/subject/get-subjects.js";

export const getSubjects = async (req: Request, res: Response) => {
    try {
        const subjects: Subject[] = await getSubjectsService()
        res.status(200).send(subjects)
    } catch(e) {
        res.status(500).send(e)
    }
}