const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator');

exports.getIndex = (req, res, next) => {
    const message = null;
    res.render('index', {
        pageTitle: 'Bigdata Solutions',
        path: '/',
        errorMessage: message
    });
}

exports.getServices = (req, res, next) => {
    const message = null;
    res.render('services', {
        pageTitle: 'Bigdata | Services',
        path: '/services',
        errorMessage: message
    });
}

exports.getResearch = (req, res, next) => {
    const message = null;
    res.render('research', {
        pageTitle: 'Bigdata | Research',
        path: '/research',
        errorMessage: message
    });
}

exports.getWorkprocess = (req, res, next) => {
    const message = null;
    res.render('workprocess', {
        pageTitle: 'Bigdata | Agile',
        path: '/workprocess',
        errorMessage: message
    });
}

exports.getContact = (req, res, next) => {
    const message = null;
    res.render('contact', {
        pageTitle: 'Bigdata | Contact',
        path: '/contact',
        errorMessage: message
    });
}

exports.postContact = (req, res, next) => {
    const { fname, email, message } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).render('contact', {
            pageTitle: 'Bigdata Solutions | Contact',
            path: '/contact',
            errorMessage: errors.array()[0].msg
        });
    }

    let transporter = nodemailer.createTransport({
        host: "smtp.zoho.com",
        secure: true,
        port: 465,
        auth: {
          user: "info@thebigdatasolution.com",
          pass: "Text-1234",
        },
      });

    const mailOptions = {
        from: 'info@thebigdatasolution.com',
        to: 'info@thebigdatasolution.com',
        subject: 'New Inquiry from Bidata Solution Hompage',
        html: `<h3>Full Name : ${fname}</h3>
                <a ></a>
                <a href = "mailto:${email}">${email}</a>
                <p>${message}</p>
                `
    };
    transporter.sendMail(mailOptions);
    res.redirect('/contact');
}